/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Servers } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO, LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  Server,
  ServersListByResourceGroupResponse,
  ServersGetResponse,
  ServersCreateOrUpdateResponse,
  ServerUpdate,
  ServersUpdateResponse,
  ServersListResponse,
  CheckNameAvailabilityRequest,
  ServersCheckNameAvailabilityResponse,
  ServersListByResourceGroupNextResponse,
  ServersListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Servers. */
export class ServersImpl implements Servers {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class Servers class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of servers in a resource groups.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Server> {
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
  ): AsyncIterableIterator<Server[]> {
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
  ): AsyncIterableIterator<Server> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of all servers in the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Server> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Server[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Server> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of servers in a resource groups.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServersListByResourceGroupResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupOperationSpec
    ) as Promise<ServersListByResourceGroupResponse>;
  }

  /**
   * Gets a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServersGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ServersGetResponse>;
  }

  /**
   * Creates or updates a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested server resource state.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    parameters: Server,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<ServersCreateOrUpdateResponse>,
      ServersCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ServersCreateOrUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      createOrUpdateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: createOrUpdateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Deletes a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    serverName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        coreHttp.RestResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Updates a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param parameters The requested server resource state.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    serverName: string,
    parameters: ServerUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<ServersUpdateResponse>, ServersUpdateResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ServersUpdateResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      updateOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: updateOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Gets a list of all servers in the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<ServersListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<ServersListResponse>;
  }

  /**
   * Determines whether a resource can be created with the specified name.
   * @param parameters The name availability request parameters.
   * @param options The options parameters.
   */
  checkNameAvailability(
    parameters: CheckNameAvailabilityRequest,
    options?: coreHttp.OperationOptions
  ): Promise<ServersCheckNameAvailabilityResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      checkNameAvailabilityOperationSpec
    ) as Promise<ServersCheckNameAvailabilityResponse>;
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServersListByResourceGroupNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByResourceGroupNextOperationSpec
    ) as Promise<ServersListByResourceGroupNextResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<ServersListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<ServersListNextResponse>;
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

const listByResourceGroupOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Server
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Server
    },
    201: {
      bodyMapper: Mappers.Server
    },
    202: {
      bodyMapper: Mappers.Server
    },
    204: {
      bodyMapper: Mappers.Server
    },
    default: {}
  },
  requestBody: Parameters.parameters61,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Server
    },
    201: {
      bodyMapper: Mappers.Server
    },
    202: {
      bodyMapper: Mappers.Server
    },
    204: {
      bodyMapper: Mappers.Server
    },
    default: {}
  },
  requestBody: Parameters.parameters62,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/servers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const checkNameAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResponse
    },
    default: {}
  },
  requestBody: Parameters.parameters63,
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByResourceGroupNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ServerListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion5],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
