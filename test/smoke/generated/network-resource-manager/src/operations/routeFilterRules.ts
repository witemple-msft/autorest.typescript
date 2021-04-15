/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { RouteFilterRules } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { LROPoller, shouldDeserializeLRO, LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  RouteFilterRule,
  RouteFilterRulesGetResponse,
  RouteFilterRulesCreateOrUpdateResponse,
  RouteFilterRulesListByRouteFilterResponse,
  RouteFilterRulesListByRouteFilterNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a RouteFilterRules. */
export class RouteFilterRulesImpl implements RouteFilterRules {
  private readonly client: NetworkManagementClientContext;

  /**
   * Initialize a new instance of the class RouteFilterRules class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all RouteFilterRules in a route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param options The options parameters.
   */
  public listByRouteFilter(
    resourceGroupName: string,
    routeFilterName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<RouteFilterRule> {
    const iter = this.listByRouteFilterPagingAll(
      resourceGroupName,
      routeFilterName,
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
        return this.listByRouteFilterPagingPage(
          resourceGroupName,
          routeFilterName,
          options
        );
      }
    };
  }

  private async *listByRouteFilterPagingPage(
    resourceGroupName: string,
    routeFilterName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<RouteFilterRule[]> {
    let result = await this._listByRouteFilter(
      resourceGroupName,
      routeFilterName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByRouteFilterNext(
        resourceGroupName,
        routeFilterName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByRouteFilterPagingAll(
    resourceGroupName: string,
    routeFilterName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<RouteFilterRule> {
    for await (const page of this.listByRouteFilterPagingPage(
      resourceGroupName,
      routeFilterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified rule from a route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    routeFilterName: string,
    ruleName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeFilterName,
      ruleName,
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
   * Gets the specified rule from a route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    routeFilterName: string,
    ruleName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteFilterRulesGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeFilterName,
      ruleName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<RouteFilterRulesGetResponse>;
  }

  /**
   * Creates or updates a route in the specified route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param ruleName The name of the route filter rule.
   * @param routeFilterRuleParameters Parameters supplied to the create or update route filter rule
   *                                  operation.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    routeFilterName: string,
    ruleName: string,
    routeFilterRuleParameters: RouteFilterRule,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<RouteFilterRulesCreateOrUpdateResponse>,
      RouteFilterRulesCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeFilterName,
      ruleName,
      routeFilterRuleParameters,
      options: this.getOperationOptions(options, "azure-async-operation")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        RouteFilterRulesCreateOrUpdateResponse
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
   * Gets all RouteFilterRules in a route filter.
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param options The options parameters.
   */
  private _listByRouteFilter(
    resourceGroupName: string,
    routeFilterName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteFilterRulesListByRouteFilterResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeFilterName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByRouteFilterOperationSpec
    ) as Promise<RouteFilterRulesListByRouteFilterResponse>;
  }

  /**
   * ListByRouteFilterNext
   * @param resourceGroupName The name of the resource group.
   * @param routeFilterName The name of the route filter.
   * @param nextLink The nextLink from the previous successful call to the ListByRouteFilter method.
   * @param options The options parameters.
   */
  private _listByRouteFilterNext(
    resourceGroupName: string,
    routeFilterName: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<RouteFilterRulesListByRouteFilterNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      routeFilterName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByRouteFilterNextOperationSpec
    ) as Promise<RouteFilterRulesListByRouteFilterNextResponse>;
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
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName}",
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
    Parameters.routeFilterName,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRule
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
    Parameters.routeFilterName,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules/{ruleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRule
    },
    201: {
      bodyMapper: Mappers.RouteFilterRule
    },
    202: {
      bodyMapper: Mappers.RouteFilterRule
    },
    204: {
      bodyMapper: Mappers.RouteFilterRule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.routeFilterRuleParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.routeFilterName,
    Parameters.ruleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByRouteFilterOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/routeFilters/{routeFilterName}/routeFilterRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRuleListResult
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
    Parameters.routeFilterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByRouteFilterNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RouteFilterRuleListResult
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
    Parameters.routeFilterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
