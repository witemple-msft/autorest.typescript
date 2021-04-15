/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ElasticPools } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import { LROPoller, shouldDeserializeLRO } from "../lro";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  Metric,
  MetricDefinition,
  ElasticPool,
  ElasticPoolsListByServerNextOptionalParams,
  ElasticPoolsListByServerOptionalParams,
  ElasticPoolsListMetricsResponse,
  ElasticPoolsListMetricDefinitionsResponse,
  ElasticPoolsListByServerResponse,
  ElasticPoolsGetResponse,
  ElasticPoolsCreateOrUpdateResponse,
  ElasticPoolUpdate,
  ElasticPoolsUpdateResponse,
  ElasticPoolsListByServerNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a ElasticPools. */
export class ElasticPoolsImpl implements ElasticPools {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ElasticPools class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The options parameters.
   */
  public listMetrics(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Metric> {
    const iter = this.listMetricsPagingAll(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
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
        return this.listMetricsPagingPage(
          resourceGroupName,
          serverName,
          elasticPoolName,
          filter,
          options
        );
      }
    };
  }

  private async *listMetricsPagingPage(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Metric[]> {
    let result = await this._listMetrics(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options
    );
    yield result.value || [];
  }

  private async *listMetricsPagingAll(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Metric> {
    for await (const page of this.listMetricsPagingPage(
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  public listMetricDefinitions(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<MetricDefinition> {
    const iter = this.listMetricDefinitionsPagingAll(
      resourceGroupName,
      serverName,
      elasticPoolName,
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
        return this.listMetricDefinitionsPagingPage(
          resourceGroupName,
          serverName,
          elasticPoolName,
          options
        );
      }
    };
  }

  private async *listMetricDefinitionsPagingPage(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<MetricDefinition[]> {
    let result = await this._listMetricDefinitions(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    yield result.value || [];
  }

  private async *listMetricDefinitionsPagingAll(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<MetricDefinition> {
    for await (const page of this.listMetricDefinitionsPagingPage(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  public listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): PagedAsyncIterableIterator<ElasticPool> {
    const iter = this.listByServerPagingAll(
      resourceGroupName,
      serverName,
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
        return this.listByServerPagingPage(
          resourceGroupName,
          serverName,
          options
        );
      }
    };
  }

  private async *listByServerPagingPage(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): AsyncIterableIterator<ElasticPool[]> {
    let result = await this._listByServer(
      resourceGroupName,
      serverName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByServerNext(
        resourceGroupName,
        serverName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByServerPagingAll(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): AsyncIterableIterator<ElasticPool> {
    for await (const page of this.listByServerPagingPage(
      resourceGroupName,
      serverName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns elastic pool  metrics.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param filter An OData filter expression that describes a subset of metrics to return.
   * @param options The options parameters.
   */
  private _listMetrics(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    filter: string,
    options?: coreHttp.OperationOptions
  ): Promise<ElasticPoolsListMetricsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      elasticPoolName,
      filter,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listMetricsOperationSpec
    ) as Promise<ElasticPoolsListMetricsResponse>;
  }

  /**
   * Returns elastic pool metric definitions.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  private _listMetricDefinitions(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ElasticPoolsListMetricDefinitionsResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      elasticPoolName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listMetricDefinitionsOperationSpec
    ) as Promise<ElasticPoolsListMetricDefinitionsResponse>;
  }

  /**
   * Gets all elastic pools in a server.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  private _listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ElasticPoolsListByServerOptionalParams
  ): Promise<ElasticPoolsListByServerResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerOperationSpec
    ) as Promise<ElasticPoolsListByServerResponse>;
  }

  /**
   * Gets an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ElasticPoolsGetResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      elasticPoolName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getOperationSpec
    ) as Promise<ElasticPoolsGetResponse>;
  }

  /**
   * Creates or updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool parameters.
   * @param options The options parameters.
   */
  async createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPool,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ElasticPoolsCreateOrUpdateResponse>,
      ElasticPoolsCreateOrUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      elasticPoolName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ElasticPoolsCreateOrUpdateResponse
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
   * Deletes an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  async delete(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      elasticPoolName,
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
   * Updates an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param parameters The elastic pool update parameters.
   * @param options The options parameters.
   */
  async update(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    parameters: ElasticPoolUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ElasticPoolsUpdateResponse>,
      ElasticPoolsUpdateResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      elasticPoolName,
      parameters,
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        ElasticPoolsUpdateResponse
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
   * Failovers an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool to failover.
   * @param options The options parameters.
   */
  async failover(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  > {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      elasticPoolName,
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
      failoverOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: failoverOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * ListByServerNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param nextLink The nextLink from the previous successful call to the ListByServer method.
   * @param options The options parameters.
   */
  private _listByServerNext(
    resourceGroupName: string,
    serverName: string,
    nextLink: string,
    options?: ElasticPoolsListByServerNextOptionalParams
  ): Promise<ElasticPoolsListByServerNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      resourceGroupName,
      serverName,
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByServerNextOperationSpec
    ) as Promise<ElasticPoolsListByServerNextResponse>;
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

const listMetricsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricListResult
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listMetricDefinitionsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/metricDefinitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricDefinitionListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByServerOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1, Parameters.skip],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    201: {
      bodyMapper: Mappers.ElasticPool
    },
    202: {
      bodyMapper: Mappers.ElasticPool
    },
    204: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  requestBody: Parameters.parameters12,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "DELETE",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  serializer
};
const updateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPool
    },
    201: {
      bodyMapper: Mappers.ElasticPool
    },
    202: {
      bodyMapper: Mappers.ElasticPool
    },
    204: {
      bodyMapper: Mappers.ElasticPool
    },
    default: {}
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const failoverOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/failover",
  httpMethod: "POST",
  responses: { 200: {}, 201: {}, 202: {}, 204: {}, default: {} },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  serializer
};
const listByServerNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion1, Parameters.skip],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
