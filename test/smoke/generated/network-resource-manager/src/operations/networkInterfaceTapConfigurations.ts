/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { NetworkInterfaceTapConfigurations } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  NetworkInterfaceTapConfiguration,
  NetworkInterfaceTapConfigurationsGetResponse,
  NetworkInterfaceTapConfigurationsCreateOrUpdateResponse,
  NetworkInterfaceTapConfigurationsListResponse,
  NetworkInterfaceTapConfigurationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a NetworkInterfaceTapConfigurations. */
export class NetworkInterfaceTapConfigurationsImpl
  implements NetworkInterfaceTapConfigurations {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class NetworkInterfaceTapConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Get all Tap configurations in a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<NetworkInterfaceTapConfiguration> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkInterfaceName,
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
          resourceGroupName,
          networkInterfaceName,
          options
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NetworkInterfaceTapConfiguration[]> {
    let result = await this._list(
      resourceGroupName,
      networkInterfaceName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        networkInterfaceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<NetworkInterfaceTapConfiguration> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkInterfaceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified tap configuration from the NetworkInterface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param tapConfigurationName The name of the tap configuration.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    networkInterfaceName: string,
    tapConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      tapConfigurationName,
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
   * Get the specified tap configuration on a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param tapConfigurationName The name of the tap configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkInterfaceName: string,
    tapConfigurationName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfaceTapConfigurationsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      tapConfigurationName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<NetworkInterfaceTapConfigurationsGetResponse>;
  }

  /**
   * Creates or updates a Tap configuration in the specified NetworkInterface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param tapConfigurationName The name of the tap configuration.
   * @param tapConfigurationParameters Parameters supplied to the create or update tap configuration
   *                                   operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    networkInterfaceName: string,
    tapConfigurationName: string,
    tapConfigurationParameters: NetworkInterfaceTapConfiguration,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<
        NetworkInterfaceTapConfigurationsCreateOrUpdateResponse
      >,
      NetworkInterfaceTapConfigurationsCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      tapConfigurationName,
      tapConfigurationParameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        NetworkInterfaceTapConfigurationsCreateOrUpdateResponse
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
   * Get all Tap configurations in a network interface.
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkInterfaceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfaceTapConfigurationsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<NetworkInterfaceTapConfigurationsListResponse>;
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param networkInterfaceName The name of the network interface.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkInterfaceName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkInterfaceTapConfigurationsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      networkInterfaceName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<NetworkInterfaceTapConfigurationsListNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/tapConfigurations/{tapConfigurationName}",
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
    Parameters.networkInterfaceName,
    Parameters.tapConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/tapConfigurations/{tapConfigurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceTapConfiguration
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
    Parameters.networkInterfaceName,
    Parameters.tapConfigurationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/tapConfigurations/{tapConfigurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceTapConfiguration
    },
    201: {
      bodyMapper: Mappers.NetworkInterfaceTapConfiguration
    },
    202: {
      bodyMapper: Mappers.NetworkInterfaceTapConfiguration
    },
    204: {
      bodyMapper: Mappers.NetworkInterfaceTapConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.tapConfigurationParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkInterfaceName,
    Parameters.tapConfigurationName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkInterfaces/{networkInterfaceName}/tapConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceTapConfigurationListResult
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
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NetworkInterfaceTapConfigurationListResult
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
    Parameters.nextLink,
    Parameters.networkInterfaceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
