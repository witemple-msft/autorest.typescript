/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ApplicationDefinitions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ApplicationClient } from "../applicationClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ApplicationDefinition,
  ApplicationDefinitionsListByResourceGroupNextOptionalParams,
  ApplicationDefinitionsListByResourceGroupOptionalParams,
  ApplicationDefinitionsGetOptionalParams,
  ApplicationDefinitionsGetResponse,
  ApplicationDefinitionsDeleteOptionalParams,
  ApplicationDefinitionsCreateOrUpdateOptionalParams,
  ApplicationDefinitionsCreateOrUpdateResponse,
  ApplicationDefinitionsListByResourceGroupResponse,
  ApplicationDefinitionsGetByIdOptionalParams,
  ApplicationDefinitionsGetByIdResponse,
  ApplicationDefinitionsDeleteByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdOptionalParams,
  ApplicationDefinitionsCreateOrUpdateByIdResponse,
  ApplicationDefinitionsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApplicationDefinitions operations. */
export class ApplicationDefinitionsImpl implements ApplicationDefinitions {
  private readonly client: ApplicationClient;

  /**
   * Initialize a new instance of the class ApplicationDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: ApplicationClient) {
    this.client = client;
  }

  /**
   * Lists the managed application definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<ApplicationDefinition> {
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
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ApplicationDefinition[]> {
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
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<ApplicationDefinition> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsGetOptionalParams
  ): Promise<ApplicationDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, applicationDefinitionName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition to delete.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, applicationDefinitionName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition to delete.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    applicationDefinitionName: string,
    options?: ApplicationDefinitionsDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      applicationDefinitionName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Creates a new managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the create or update an managed application definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApplicationDefinitionsCreateOrUpdateResponse>,
      ApplicationDefinitionsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ApplicationDefinitionsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, applicationDefinitionName, parameters, options },
      createOrUpdateOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates a new managed application definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param applicationDefinitionName The name of the managed application definition.
   * @param parameters Parameters supplied to the create or update an managed application definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    applicationDefinitionName: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateOptionalParams
  ): Promise<ApplicationDefinitionsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      applicationDefinitionName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Lists the managed application definitions in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ApplicationDefinitionsListByResourceGroupOptionalParams
  ): Promise<ApplicationDefinitionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * Gets the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  getById(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsGetByIdOptionalParams
  ): Promise<ApplicationDefinitionsGetByIdResponse> {
    return this.client.sendOperationRequest(
      { applicationDefinitionId, options },
      getByIdOperationSpec
    );
  }

  /**
   * Deletes the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  async beginDeleteById(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsDeleteByIdOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { applicationDefinitionId, options },
      deleteByIdOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes the managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param options The options parameters.
   */
  async beginDeleteByIdAndWait(
    applicationDefinitionId: string,
    options?: ApplicationDefinitionsDeleteByIdOptionalParams
  ): Promise<void> {
    const poller = await this.beginDeleteById(applicationDefinitionId, options);
    return poller.pollUntilDone();
  }

  /**
   * Creates a new managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param parameters Parameters supplied to the create or update a managed application definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateById(
    applicationDefinitionId: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ApplicationDefinitionsCreateOrUpdateByIdResponse>,
      ApplicationDefinitionsCreateOrUpdateByIdResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ApplicationDefinitionsCreateOrUpdateByIdResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { applicationDefinitionId, parameters, options },
      createOrUpdateByIdOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates a new managed application definition.
   * @param applicationDefinitionId The fully qualified ID of the managed application definition,
   *                                including the managed application name and the managed application definition resource type. Use the
   *                                format,
   *                                /subscriptions/{guid}/resourceGroups/{resource-group-name}/Microsoft.Solutions/applicationDefinitions/{applicationDefinition-name}
   * @param parameters Parameters supplied to the create or update a managed application definition.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateByIdAndWait(
    applicationDefinitionId: string,
    parameters: ApplicationDefinition,
    options?: ApplicationDefinitionsCreateOrUpdateByIdOptionalParams
  ): Promise<ApplicationDefinitionsCreateOrUpdateByIdResponse> {
    const poller = await this.beginCreateOrUpdateById(
      applicationDefinitionId,
      parameters,
      options
    );
    return poller.pollUntilDone();
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
    options?: ApplicationDefinitionsListByResourceGroupNextOptionalParams
  ): Promise<ApplicationDefinitionsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.applicationDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.applicationDefinitionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions/{applicationDefinitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    201: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    202: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    204: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.applicationDefinitionName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Solutions/applicationDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{applicationDefinitionId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    404: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationDefinitionId],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{applicationDefinitionId}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationDefinitionId],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateByIdOperationSpec: coreClient.OperationSpec = {
  path: "/{applicationDefinitionId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    201: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    202: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    204: {
      bodyMapper: Mappers.ApplicationDefinition
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.applicationDefinitionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
