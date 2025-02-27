// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  PropertyDeclarationStructure,
  ClassDeclaration,
  SourceFile,
  CodeBlockWriter
} from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import {
  addOperationSpecs,
  writeOperations,
  writeGetOperationOptions
} from "./operationGenerator";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ImplementationLocation, SchemaType } from "@autorest/codemodel";
import {
  OperationDetails,
  OperationGroupDetails
} from "../models/operationDetails";
import { formatJsDocParam } from "./utils/parameterUtils";
import { shouldImportParameters } from "./utils/importUtils";
import { getAllModelsNames } from "./utils/responseTypeUtils";
import { addTracingOperationImports } from "./utils/tracingUtils";
import { addPagingEsNextRef, addPagingImports } from "./utils/pagingOperations";
import { getAutorestOptions } from "../autorestSession";
import { ParameterDetails } from "../models/parameterDetails";
import { EndpointDetails } from "../transforms/urlTransforms";
import { PackageDetails } from "../models/packageDetails";

type OperationDeclarationDetails = { name: string; typeName: string };

export function generateClient(clientDetails: ClientDetails, project: Project) {
  const {
    useCoreV2,
    hideClients,
    srcPath,
    addCredentials,
    packageDetails
  } = getAutorestOptions();
  const hasMappers = !!clientDetails.mappers.length;

  // Check if there are any client level operations
  const inlineOperations = clientDetails.operationGroups.filter(
    og => og.isTopLevel
  );

  const hasInlineOperations = inlineOperations.length > 0;

  // Check if there are any non client-level operations to import
  const importedOperations = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  const hasImportedOperations = importedOperations.length > 0;

  if (hasImportedOperations && hasInlineOperations) {
    // Check if there is a name collision between client-level operation names
    // and operation group key names.
    checkForNameCollisions(importedOperations, inlineOperations);
  }

  const hasCredentials = !!addCredentials;
  const hasClientOptionalParams = clientDetails.parameters.some(
    p =>
      !p.required && p.implementationLocation === ImplementationLocation.Client
  );

  const clientFile = project.createSourceFile(
    `${srcPath}/${clientDetails.sourceFileName}.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  !useCoreV2 && writePackageInfo(clientFile, packageDetails);

  const flattenedInlineOperations = inlineOperations.reduce<OperationDetails[]>(
    (acc, curr) => (acc = [...acc, ...curr.operations]),
    []
  );

  if (!useCoreV2) {
    clientFile.addImportDeclaration({
      namespaceImport: "coreHttp",
      moduleSpecifier: "@azure/core-http"
    });
  } else {
    clientFile.addImportDeclaration({
      namespaceImport: "coreClient",
      moduleSpecifier: "@azure/core-client"
    });
  }

  if (hasCredentials || hasInlineOperations || !hasClientOptionalParams) {
    clientFile.addImportDeclaration({
      namespaceImport: "coreRestPipeline",
      moduleSpecifier: "@azure/core-rest-pipeline"
    });
    clientFile.addImportDeclaration({
      namespaceImport: "coreTracing",
      moduleSpecifier: "@azure/core-tracing"
    });
    if (hasCredentials) {
      clientFile.addImportDeclaration({
        namespaceImport: "coreAuth",
        moduleSpecifier: "@azure/core-auth"
      });
    }
  }

  addPagingEsNextRef(flattenedInlineOperations, clientFile);
  addPagingImports(flattenedInlineOperations, clientFile);

  const hasLro = inlineOperations.some(og => og.operations.some(o => o.isLro));

  if (hasInlineOperations && hasLro) {
    clientFile.addImportDeclaration({
      namedImports: ["PollerLike", "PollOperationState", "LroEngine"],
      moduleSpecifier: "@azure/core-lro"
    });
    clientFile.addImportDeclaration({
      namedImports: ["LroImpl"],
      moduleSpecifier: `./lroImpl`
    });
  }

  if (hasImportedOperations) {
    clientFile.addImportDeclaration({
      namedImports: importedOperations.map(
        o =>
          `${normalizeName(
            o.name,
            NameType.OperationGroup,
            true /* shouldGuard */
          )}Impl`
      ),
      moduleSpecifier: "./operations"
    });

    clientFile.addImportDeclaration({
      namedImports: importedOperations.map(
        o =>
          `${normalizeName(
            o.name,
            NameType.OperationGroup,
            true /* shouldGuard */
          )}`
      ),
      moduleSpecifier: "./operationsInterfaces"
    });
  }

  if (hasInlineOperations && shouldImportParameters(clientDetails)) {
    addTracingOperationImports(clientFile, ".");
    clientFile.addImportDeclaration({
      namespaceImport: "Parameters",
      moduleSpecifier: "./models/parameters"
    });
  }

  // Only import mappers if there are any
  if (hasInlineOperations && hasMappers) {
    clientFile.addImportDeclaration({
      namespaceImport: "Mappers",
      moduleSpecifier: "./models/mappers"
    });
  }

  const clientClass = clientFile.addClass({
    name: clientDetails.className,
    extends: !useCoreV2 ? "coreHttp.ServiceClient" : "coreClient.ServiceClient",
    isExported: true
  });

  if (hideClients) {
    clientClass.addJsDoc({
      tags: [
        {
          tagName: "internal"
        }
      ]
    });
  }

  const importedModels = new Set<string>();
  const clientParams = clientDetails.parameters.filter(
    param => param.implementationLocation === ImplementationLocation.Client
  );
  writeClassProperties(clientClass, clientParams, importedModels);
  writeConstructor(clientDetails, clientClass, importedModels);
  writeClientOperations(
    clientFile,
    clientClass,
    clientDetails,
    hasLro,
    importedModels
  );

  // Use named import from Models
  if (importedModels.size) {
    clientFile.addImportDeclaration({
      namedImports: [...importedModels],
      moduleSpecifier: "./models"
    });
  }

  clientFile.fixUnusedIdentifiers();
}

function writeClassProperties(
  clientClass: ClassDeclaration,
  clientParams: ParameterDetails[],
  importedModels: Set<string>
) {
  const params = clientParams.filter(p => !p.isSynthetic);
  params.forEach(({ typeDetails }) =>
    typeDetails.usedModels.forEach(model => importedModels.add(model))
  );
  clientClass.addProperties(
    params.map(param => {
      return {
        name: param.name,
        type: param.typeDetails.typeName,
        hasQuestionToken: !param.required
      } as PropertyDeclarationStructure;
    })
  );
}

export function checkForNameCollisions(
  importedOperations: OperationGroupDetails[],
  inlineOperations: OperationGroupDetails[]
) {
  const groupOpsKeyNames = importedOperations.map(og => og.key.toLowerCase());
  const inlineOpsKeyNames = inlineOperations.map(og =>
    og.operations.map(operation => operation.name.toLowerCase())
  );

  const collidingKeyNames = inlineOpsKeyNames.map(inlineOpsKeyArray =>
    inlineOpsKeyArray.filter(inlineOpKey =>
      groupOpsKeyNames.includes(inlineOpKey)
    )
  );

  if (collidingKeyNames.length > 0 && collidingKeyNames[0].length > 0) {
    const messages = collidingKeyNames.map(
      key =>
        `Operation Group(s) '${key}' is/are colliding with client-level operation(s) with the same name.`
    );
    throw new Error(...messages);
  }
}

function writeConstructor(
  clientDetails: ClientDetails,
  classDeclaration: ClassDeclaration,
  importedModels: Set<string>
) {
  const requiredParams = clientDetails.parameters.filter(
    param =>
      param.required &&
      param.implementationLocation === ImplementationLocation.Client &&
      !param.defaultValue &&
      param.schemaType !== SchemaType.Constant
  );

  const hasClientOptionalParameters = clientDetails.parameters.some(
    param =>
      !param.required &&
      param.implementationLocation === ImplementationLocation.Client
  );

  const docs = [
    `Initializes a new instance of the ${clientDetails.className} class.`,
    ...formatJsDocParam(requiredParams),
    `@param options The parameter options`
  ]
    .filter(d => !!d)
    .join("\n");

  let optionsParameterType = "ServiceClientOptions";

  if (hasClientOptionalParameters) {
    const paramType = `${clientDetails.className}OptionalParams`;
    importedModels.add(paramType);
    optionsParameterType = paramType;
  }

  requiredParams.forEach(({ typeDetails }) =>
    typeDetails.usedModels.forEach(model => importedModels.add(model))
  );

  const clientConstructor = classDeclaration.addConstructor({
    docs: [docs],
    parameters: [
      ...requiredParams.map(p => ({
        name: p.name,
        hasQuestionToken: !p.required,
        type: p.typeDetails.typeName
      })),
      {
        name: "options",
        hasQuestionToken: true,
        type: optionsParameterType
      }
    ]
  });

  const { useCoreV2 } = getAutorestOptions();
  const hasLro = clientDetails.operationGroups.some(og =>
    og.operations.some(o => o.isLro)
  );

  const clientParams = clientDetails.parameters.filter(
    param => param.implementationLocation === ImplementationLocation.Client
  );
  const addBlankLine = true;
  const requiredParameters = getRequiredParamAssignments(requiredParams);
  const constantParameters = getConstantClientParamAssignments(clientParams);

  const writeStatement = (content: string, shouldAddBlankLine = false) => (
    writer: CodeBlockWriter
  ) => {
    if (content) {
      writer.writeLine(content);
      shouldAddBlankLine && writer.blankLine();
    }
  };
  
  const writeStatements = (lines: string[], shouldAddBlankLine = false) => (
    writer: CodeBlockWriter
  ) => {
    lines.forEach(line => writer.writeLine(line));
    shouldAddBlankLine && writer.blankLine();
  };

  clientConstructor.addStatements([
    writeStatements(getRequiredParamChecks(requiredParams), addBlankLine),
    writeStatement(
      writeDefaultOptions(
        clientParams.some(p => p.name === "credentials"),
        hasLro,
        clientDetails
      )
    )
  ]);

  !useCoreV2 &&
    clientConstructor.addStatements([
      writeStatement(getEndpointStatement(clientDetails.endpoint), addBlankLine)
    ]);

  clientConstructor.addStatements([
    requiredParameters.length ? "// Parameter assignments" : "",
    writeStatements(getRequiredParamAssignments(requiredParams), addBlankLine),
    constantParameters.length
      ? "// Assigning values to Constant parameters"
      : "",
    writeStatements(constantParameters, addBlankLine)
  ]);

  const operationDeclarationDetails: OperationDeclarationDetails[] = getOperationGroupsDeclarationDetails(
    clientDetails.operationGroups.filter(og => !og.isTopLevel)
  );

  clientConstructor.addStatements([
    ...operationDeclarationDetails.map(
      ({ name, typeName }) => `this.${name} = new ${typeName}Impl(this)`
    )
  ]);
}

function getOperationGroupsDeclarationDetails(
  operationGroups: OperationGroupDetails[]
) {
  return operationGroups.map(og => {
    return {
      name: normalizeName(og.name, NameType.Property),
      typeName: `${normalizeName(
        og.name,
        NameType.OperationGroup,
        true /* shouldGuard */
      )}`
    };
  });
}

function writeClientOperations(
  file: SourceFile,
  classDeclaration: ClassDeclaration,
  clientDetails: ClientDetails,
  hasLro: boolean,
  importedModels: Set<string>
) {
  const allModelsNames = getAllModelsNames(clientDetails);
  const topLevelGroup = clientDetails.operationGroups.find(og => og.isTopLevel);
  const hasMappers = !!clientDetails.mappers.length;
  // Add top level operation groups as client properties
  if (!!topLevelGroup) {
    if (hasLro) {
      writeGetOperationOptions(classDeclaration);
    }
    writeOperations(
      topLevelGroup,
      classDeclaration,
      importedModels,
      allModelsNames,
      clientDetails,
      true // isInline
    );

    addOperationSpecs(
      topLevelGroup,
      file,
      clientDetails.parameters,
      hasMappers
    );
  }

  const operationsDeclarationDetails = getOperationGroupsDeclarationDetails(
    clientDetails.operationGroups.filter(og => !og.isTopLevel)
  );

  // Each operation group will have its class
  // and the client class will have each group as properties
  classDeclaration.addProperties(
    operationsDeclarationDetails.map(op => {
      return {
        name: op.name,
        type: op.typeName
      } as PropertyDeclarationStructure;
    })
  );
}

function getRequiredParamChecks(requiredParameters: ParameterDetails[]) {
  return requiredParameters.map(
    ({ name }) => `if(${name} === undefined) {
    throw new Error("'${name}' cannot be null");
  }`
  );
}

function getCredentialScopesValue(credentialScopes?: string | string[]) {
  if (Array.isArray(credentialScopes)) {
    return `[${credentialScopes.map(scope => `"${scope}"`).join()}]`;
  } else if (typeof credentialScopes === "string") {
    return `"${credentialScopes}"`;
  }

  return credentialScopes;
}

function getTrack2DefaultContent(addScopes: string, hasCredentials: boolean) {
  return `// Initializing default values for options
  if (!options) {
     options = {};
  }

  const defaultUserAgent = \`azsdk-js-\${packageName.replace(/@.*\\//,"")}/\${packageVersion} \${coreHttp.getDefaultUserAgentValue()}\`;
  
  ${addScopes}

  super(${hasCredentials ? "credentials" : `undefined`}, {
    ...options,
    userAgent: options.userAgent
      ? \`\${options.userAgent} \${defaultUserAgent}\`
      : \`\${defaultUserAgent}\`
  });
  
  this.requestContentType = "application/json; charset=utf-8";
  
  `;
}

function getTrack1DefaultContent(addScopes: string, defaults: string, packageDetails: PackageDetails, clientDetails: ClientDetails) {
  return `// Initializing default values for options
  if (!options) {
    options = {};
  }
  ${defaults}

  const packageDetails = \`azsdk-js-${packageDetails.name.replace(
    /@.*\//,
    ""
  )}/${packageDetails.version}\`;
  const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? \`\${options.userAgentOptions.userAgentPrefix} \${packageDetails}\`
        : \`\${packageDetails}\`;
  
  ${addScopes}
  const optionsWithDefaults = {
    ...defaults,
    ...options,
    userAgentOptions: {
      userAgentPrefix
    },
    baseUri: ${getEndpoint(clientDetails.endpoint)}
  };
  super(optionsWithDefaults);
  `;
}

function writeDefaultOptions(
  hasCredentials: boolean,
  hasLro: boolean,
  clientDetails: ClientDetails
) {
  const { useCoreV2, credentialScopes, packageDetails } = getAutorestOptions();

  const credentialScopesValues = getCredentialScopesValue(credentialScopes);
  const addScopes = credentialScopes
    ? `if(!options.credentialScopes) {
    options.credentialScopes = ${credentialScopesValues}
  }`
    : "";

  const defaults = !hasCredentials
    ? `const defaults: ${clientDetails.className}OptionalParams = {
    requestContentType: "application/json; charset=utf-8"
  };`
    : `const defaults: ${clientDetails.className}OptionalParams = {
    requestContentType: "application/json; charset=utf-8",
    credential: credentials
  };`;

  return !useCoreV2
    ? getTrack2DefaultContent(addScopes, hasCredentials)
    : getTrack1DefaultContent(addScopes, defaults, packageDetails, clientDetails);
}

function getEndpointStatement({ endpoint }: EndpointDetails) {
  return `this.baseUri = options.endpoint ${
    endpoint ? ` || "${endpoint}"` : ""
  };`;
}

function getEndpoint({ endpoint }: EndpointDetails) {
  return `options.endpoint ${endpoint ? ` || "${endpoint}"` : ""}`;
}

function getRequiredParamAssignments(requiredParameters: ParameterDetails[]) {
  const disallowedClientParameters = ["credentials"];
  return requiredParameters
    .filter(({ name }) => !disallowedClientParameters.includes(name))
    .map(({ name }) => `this.${name} = ${name};`);
}

function getConstantClientParamAssignments(
  clientParameters: ParameterDetails[]
) {
  return clientParameters
    .filter(p => !!p.defaultValue || p.schemaType === SchemaType.Constant)
    .map(
      ({ name, defaultValue }) =>
        `this.${name} = options.${name} ||  ${defaultValue}`
    );
}

function writePackageInfo(
  sourceFile: SourceFile,
  packageDetails: PackageDetails
) {
  sourceFile.addStatements([
    `\n\n`,
    `const packageName = "${packageDetails.name || ""}";`,
    `const packageVersion = "${packageDetails.version || ""}";`
  ]);
}