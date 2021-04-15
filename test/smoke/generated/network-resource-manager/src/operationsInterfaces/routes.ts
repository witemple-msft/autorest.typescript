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
  Route,
  RoutesGetResponse,
  RoutesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Routes. */
export interface Routes {
  /**
   * Gets all routes in a route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    routeTableName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Route>;
  /**
   * Deletes the specified route from a route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param routeName The name of the route.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    routeTableName: string,
    routeName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified route from a route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param routeName The name of the route.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    routeTableName: string,
    routeName: string,
    options?: coreHttp.OperationOptions
  ): Promise<RoutesGetResponse>;
  /**
   * Creates or updates a route in the specified route table.
   * @param resourceGroupName The name of the resource group.
   * @param routeTableName The name of the route table.
   * @param routeName The name of the route.
   * @param routeParameters Parameters supplied to the create or update route operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    routeTableName: string,
    routeName: string,
    routeParameters: Route,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<RoutesCreateOrUpdateResponse>,
      RoutesCreateOrUpdateResponse
    >
  >;
}
