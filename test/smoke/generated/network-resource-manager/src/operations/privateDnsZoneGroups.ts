/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PrivateDnsZoneGroups } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO, LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  PrivateDnsZoneGroup,
  PrivateDnsZoneGroupsGetResponse,
  PrivateDnsZoneGroupsCreateOrUpdateResponse,
  PrivateDnsZoneGroupsListResponse,
  PrivateDnsZoneGroupsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a PrivateDnsZoneGroups. */
export class PrivateDnsZoneGroupsImpl implements PrivateDnsZoneGroups {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class PrivateDnsZoneGroups class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all private dns zone groups in a private endpoint.
   * @param privateEndpointName The name of the private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    privateEndpointName: string,
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<PrivateDnsZoneGroup> {
    const iter = this.listPagingAll(
      privateEndpointName,
      resourceGroupName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(
          privateEndpointName,
          resourceGroupName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    privateEndpointName: string,
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PrivateDnsZoneGroup[]> {
    let result = await this._list(
      privateEndpointName,
      resourceGroupName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        privateEndpointName,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    privateEndpointName: string,
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<PrivateDnsZoneGroup> {
    for await (const page of this.listPagingPage(
      privateEndpointName,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified private dns zone group.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      privateEndpointName,
      privateDnsZoneGroupName,
      options: this.getOperationOptions(options, "location")
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
      sendOperation,
      finalStateVia: "location"
    });
  }

  /**
   * Gets the private dns zone group resource by specified private dns zone group name.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateDnsZoneGroupsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      privateEndpointName,
      privateDnsZoneGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<PrivateDnsZoneGroupsGetResponse>;
  }

  /**
   * Creates or updates a private dns zone group in the specified private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param privateEndpointName The name of the private endpoint.
   * @param privateDnsZoneGroupName The name of the private dns zone group.
   * @param parameters Parameters supplied to the create or update private dns zone group operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    privateEndpointName: string,
    privateDnsZoneGroupName: string,
    parameters: PrivateDnsZoneGroup,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<PrivateDnsZoneGroupsCreateOrUpdateResponse>,
      PrivateDnsZoneGroupsCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      privateEndpointName,
      privateDnsZoneGroupName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        PrivateDnsZoneGroupsCreateOrUpdateResponse
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
      sendOperation,
      finalStateVia: "azure-async-operation"
    });
  }

  /**
   * Gets all private dns zone groups in a private endpoint.
   * @param privateEndpointName The name of the private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    privateEndpointName: string,
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateDnsZoneGroupsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      privateEndpointName,
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<PrivateDnsZoneGroupsListResponse>;
  }

  /**
   * ListNext
   * @param privateEndpointName The name of the private endpoint.
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    privateEndpointName: string,
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateDnsZoneGroupsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      privateEndpointName,
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<PrivateDnsZoneGroupsListNextResponse>;
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

const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups/{privateDnsZoneGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
    Parameters.privateDnsZoneGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups/{privateDnsZoneGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
    Parameters.privateDnsZoneGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups/{privateDnsZoneGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroup
    },
    201: {
      bodyMapper: Mappers.PrivateDnsZoneGroup
    },
    202: {
      bodyMapper: Mappers.PrivateDnsZoneGroup
    },
    204: {
      bodyMapper: Mappers.PrivateDnsZoneGroup
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters38,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName,
    Parameters.privateDnsZoneGroupName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/privateEndpoints/{privateEndpointName}/privateDnsZoneGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.privateEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PrivateDnsZoneGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.privateEndpointName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
