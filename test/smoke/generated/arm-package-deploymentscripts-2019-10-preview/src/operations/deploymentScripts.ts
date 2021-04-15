/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeploymentScripts } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeploymentScriptsClientContext } from "../deploymentScriptsClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DeploymentScriptUnion,
  DeploymentScriptsCreateResponse,
  DeploymentScriptsUpdateOptionalParams,
  DeploymentScriptsUpdateResponse,
  DeploymentScriptsGetResponse,
  DeploymentScriptsListBySubscriptionResponse,
  DeploymentScriptsGetLogsResponse,
  DeploymentScriptsGetLogsDefaultOptionalParams,
  DeploymentScriptsGetLogsDefaultResponse,
  DeploymentScriptsListByResourceGroupResponse,
  DeploymentScriptsListBySubscriptionNextResponse,
  DeploymentScriptsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a DeploymentScripts. */
export class DeploymentScriptsImpl implements DeploymentScripts {
  private readonly client: DeploymentScriptsClientContext;

  /**
   * Initialize a new instance of the class DeploymentScripts class.
   * @param client Reference to the service client
   */
  constructor(client: DeploymentScriptsClientContext) {
    this.client = client;
  }

  /**
   * Lists all deployment scripts for a given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DeploymentScriptUnion> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBySubscriptionPagingPage(options);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeploymentScriptUnion[]> {
    let result = await this._listBySubscription(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeploymentScriptUnion> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists deployments scripts.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<DeploymentScriptUnion> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByResourceGroupPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeploymentScriptUnion[]> {
    let result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<DeploymentScriptUnion> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a deployment script.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param deploymentScript Deployment script supplied to the operation.
   * @param options The options parameters.
   */
  async create(
    resourceGroupName: string,
    scriptName: string,
    deploymentScript: DeploymentScriptUnion,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentScriptsCreateResponse>,
      DeploymentScriptsCreateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      scriptName,
      deploymentScript,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        DeploymentScriptsCreateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates deployment script tags with specified values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsUpdateOptionalParams
  ): Promise<DeploymentScriptsUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      scriptName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateOperationSpec
    ) as Promise<DeploymentScriptsUpdateResponse>;
  }

  /**
   * Gets a deployment script with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scriptName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      scriptName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<DeploymentScriptsGetResponse>;
  }

  /**
   * Deletes a deployment script. When operation completes, status code 200 returned without content.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    scriptName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      scriptName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Lists all deployment scripts for a given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListBySubscriptionResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySubscriptionOperationSpec
    ) as Promise<DeploymentScriptsListBySubscriptionResponse>;
  }

  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogs(
    resourceGroupName: string,
    scriptName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsGetLogsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      scriptName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getLogsOperationSpec
    ) as Promise<DeploymentScriptsGetLogsResponse>;
  }

  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogsDefault(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetLogsDefaultOptionalParams
  ): Promise<DeploymentScriptsGetLogsDefaultResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      scriptName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getLogsDefaultOperationSpec
    ) as Promise<DeploymentScriptsGetLogsDefaultResponse>;
  }

  /**
   * Lists deployments scripts.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<DeploymentScriptsListByResourceGroupResponse>;
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListBySubscriptionNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listBySubscriptionNextOperationSpec
    ) as Promise<DeploymentScriptsListBySubscriptionNextResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<DeploymentScriptsListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<DeploymentScriptsListByResourceGroupNextResponse>;
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const createOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    201: {
      bodyMapper: Mappers.DeploymentScript
    },
    202: {
      bodyMapper: Mappers.DeploymentScript
    },
    204: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  requestBody: Parameters.deploymentScript,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  requestBody: Parameters.deploymentScript1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deploymentScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getLogsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptLogsList
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getLogsDefaultOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptLog
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.tail],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
