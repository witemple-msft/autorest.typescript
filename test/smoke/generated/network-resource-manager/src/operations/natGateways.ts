/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { NatGateways } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  NatGateway,
  NatGatewaysGetOptionalParams,
  NatGatewaysGetResponse,
  NatGatewaysCreateOrUpdateResponse,
  TagsObject,
  NatGatewaysUpdateTagsResponse,
  NatGatewaysListAllResponse,
  NatGatewaysListResponse,
  NatGatewaysListAllNextResponse,
  NatGatewaysListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a NatGateways. */
export class NatGatewaysImpl implements NatGateways {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class NatGateways class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all the Nat Gateways in a subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<NatGateway> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listAllPagingPage(options);
      }
    };
  }

  private async *listAllPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NatGateway[]> {
    let result = await this._listAll(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listAllPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NatGateway> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all nat gateways in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<NatGateway> {
    const iter = this.listPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NatGateway[]> {
    let result = await this._list(resourceGroupName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NatGateway> {
    for await (const page of this.listPagingPage(resourceGroupName, options)) {
      yield* page;
    }
  }

  /**
   * Deletes the specified nat gateway.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    natGatewayName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      natGatewayName,
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
   * Gets the specified nat gateway in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    natGatewayName: string,
    options?: NatGatewaysGetOptionalParams
  ): Promise<NatGatewaysGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      natGatewayName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<NatGatewaysGetResponse>;
  }

  /**
   * Creates or updates a nat gateway.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param parameters Parameters supplied to the create or update nat gateway operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    natGatewayName: string,
    parameters: NatGateway,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<NatGatewaysCreateOrUpdateResponse>,
      NatGatewaysCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      natGatewayName,
      parameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        NatGatewaysCreateOrUpdateResponse
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
   * Updates nat gateway tags.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param parameters Parameters supplied to update nat gateway tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    natGatewayName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<NatGatewaysUpdateTagsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      natGatewayName,
      parameters,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      updateTagsOperationSpec
    ) as Promise<NatGatewaysUpdateTagsResponse>;
  }

  /**
   * Gets all the Nat Gateways in a subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: coreHttp.OperationOptions
  ): Promise<NatGatewaysListAllResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllOperationSpec
    ) as Promise<NatGatewaysListAllResponse>;
  }

  /**
   * Gets all nat gateways in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NatGatewaysListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<NatGatewaysListResponse>;
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<NatGatewaysListAllNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listAllNextOperationSpec
    ) as Promise<NatGatewaysListAllNextResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<NatGatewaysListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<NatGatewaysListNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/natGateways/{natGatewayName}",
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
    Parameters.natGatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/natGateways/{natGatewayName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NatGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.natGatewayName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/natGateways/{natGatewayName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NatGateway
    },
    201: {
      bodyMapper: Mappers.NatGateway
    },
    202: {
      bodyMapper: Mappers.NatGateway
    },
    204: {
      bodyMapper: Mappers.NatGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters16,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.natGatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateTagsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/natGateways/{natGatewayName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NatGateway
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.natGatewayName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listAllOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Network/natGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NatGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/natGateways",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NatGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
const listAllNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NatGatewayListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NatGatewayListResult
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
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
