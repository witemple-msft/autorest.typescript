/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  GremlinDatabaseGetResults,
  GremlinGraphGetResults,
  GremlinResourcesGetGremlinDatabaseResponse,
  GremlinDatabaseCreateUpdateParameters,
  GremlinResourcesCreateUpdateGremlinDatabaseResponse,
  GremlinResourcesGetGremlinDatabaseThroughputResponse,
  ThroughputSettingsUpdateParameters,
  GremlinResourcesUpdateGremlinDatabaseThroughputResponse,
  GremlinResourcesGetGremlinGraphResponse,
  GremlinGraphCreateUpdateParameters,
  GremlinResourcesCreateUpdateGremlinGraphResponse,
  GremlinResourcesGetGremlinGraphThroughputResponse,
  GremlinResourcesUpdateGremlinGraphThroughputResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GremlinResources. */
export interface GremlinResources {
  /**
   * Lists the Gremlin databases under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listGremlinDatabases(
    resourceGroupName: string,
    accountName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<GremlinDatabaseGetResults>;
  /**
   * Lists the Gremlin graph under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  listGremlinGraphs(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<GremlinGraphGetResults>;
  /**
   * Gets the Gremlin databases under an existing Azure Cosmos DB database account with the provided
   * name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  getGremlinDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GremlinResourcesGetGremlinDatabaseResponse>;
  /**
   * Create or update an Azure Cosmos DB Gremlin database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param createUpdateGremlinDatabaseParameters The parameters to provide for the current Gremlin
   *                                              database.
   * @param options The options parameters.
   */
  createUpdateGremlinDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    createUpdateGremlinDatabaseParameters: GremlinDatabaseCreateUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<GremlinResourcesCreateUpdateGremlinDatabaseResponse>,
      GremlinResourcesCreateUpdateGremlinDatabaseResponse
    >
  >;
  /**
   * Deletes an existing Azure Cosmos DB Gremlin database.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  deleteGremlinDatabase(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the RUs per second of the Gremlin database under an existing Azure Cosmos DB database account
   * with the provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param options The options parameters.
   */
  getGremlinDatabaseThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GremlinResourcesGetGremlinDatabaseThroughputResponse>;
  /**
   * Update RUs per second of an Azure Cosmos DB Gremlin database
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Gremlin database.
   * @param options The options parameters.
   */
  updateGremlinDatabaseThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<
        GremlinResourcesUpdateGremlinDatabaseThroughputResponse
      >,
      GremlinResourcesUpdateGremlinDatabaseThroughputResponse
    >
  >;
  /**
   * Gets the Gremlin graph under an existing Azure Cosmos DB database account.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  getGremlinGraph(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GremlinResourcesGetGremlinGraphResponse>;
  /**
   * Create or update an Azure Cosmos DB Gremlin graph
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param createUpdateGremlinGraphParameters The parameters to provide for the current Gremlin graph.
   * @param options The options parameters.
   */
  createUpdateGremlinGraph(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    createUpdateGremlinGraphParameters: GremlinGraphCreateUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<GremlinResourcesCreateUpdateGremlinGraphResponse>,
      GremlinResourcesCreateUpdateGremlinGraphResponse
    >
  >;
  /**
   * Deletes an existing Azure Cosmos DB Gremlin graph.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  deleteGremlinGraph(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the Gremlin graph throughput under an existing Azure Cosmos DB database account with the
   * provided name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param options The options parameters.
   */
  getGremlinGraphThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GremlinResourcesGetGremlinGraphThroughputResponse>;
  /**
   * Update RUs per second of an Azure Cosmos DB Gremlin graph
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param databaseName Cosmos DB database name.
   * @param graphName Cosmos DB graph name.
   * @param updateThroughputParameters The RUs per second of the parameters to provide for the current
   *                                   Gremlin graph.
   * @param options The options parameters.
   */
  updateGremlinGraphThroughput(
    resourceGroupName: string,
    accountName: string,
    databaseName: string,
    graphName: string,
    updateThroughputParameters: ThroughputSettingsUpdateParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<GremlinResourcesUpdateGremlinGraphThroughputResponse>,
      GremlinResourcesUpdateGremlinGraphThroughputResponse
    >
  >;
}
