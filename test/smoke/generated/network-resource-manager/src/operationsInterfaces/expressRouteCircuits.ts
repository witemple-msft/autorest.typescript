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
  ExpressRouteCircuit,
  ExpressRouteCircuitsGetResponse,
  ExpressRouteCircuitsCreateOrUpdateResponse,
  TagsObject,
  ExpressRouteCircuitsUpdateTagsResponse,
  ExpressRouteCircuitsListArpTableResponse,
  ExpressRouteCircuitsListRoutesTableResponse,
  ExpressRouteCircuitsListRoutesTableSummaryResponse,
  ExpressRouteCircuitsGetStatsResponse,
  ExpressRouteCircuitsGetPeeringStatsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ExpressRouteCircuits. */
export interface ExpressRouteCircuits {
  /**
   * Gets all the express route circuits in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ExpressRouteCircuit>;
  /**
   * Gets all the express route circuits in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ExpressRouteCircuit>;
  /**
   * Deletes the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    circuitName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets information about the specified express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of express route circuit.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    circuitName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCircuitsGetResponse>;
  /**
   * Creates or updates an express route circuit.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param parameters Parameters supplied to the create or update express route circuit operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    circuitName: string,
    parameters: ExpressRouteCircuit,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ExpressRouteCircuitsCreateOrUpdateResponse>,
      ExpressRouteCircuitsCreateOrUpdateResponse
    >
  >;
  /**
   * Updates an express route circuit tags.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the circuit.
   * @param parameters Parameters supplied to update express route circuit tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    circuitName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCircuitsUpdateTagsResponse>;
  /**
   * Gets the currently advertised ARP table associated with the express route circuit in a resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  listArpTable(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    devicePath: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ExpressRouteCircuitsListArpTableResponse>,
      ExpressRouteCircuitsListArpTableResponse
    >
  >;
  /**
   * Gets the currently advertised routes table associated with the express route circuit in a resource
   * group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  listRoutesTable(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    devicePath: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ExpressRouteCircuitsListRoutesTableResponse>,
      ExpressRouteCircuitsListRoutesTableResponse
    >
  >;
  /**
   * Gets the currently advertised routes table summary associated with the express route circuit in a
   * resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param devicePath The path of the device.
   * @param options The options parameters.
   */
  listRoutesTableSummary(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    devicePath: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<ExpressRouteCircuitsListRoutesTableSummaryResponse>,
      ExpressRouteCircuitsListRoutesTableSummaryResponse
    >
  >;
  /**
   * Gets all the stats from an express route circuit in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param options The options parameters.
   */
  getStats(
    resourceGroupName: string,
    circuitName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCircuitsGetStatsResponse>;
  /**
   * Gets all stats from an express route circuit in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param circuitName The name of the express route circuit.
   * @param peeringName The name of the peering.
   * @param options The options parameters.
   */
  getPeeringStats(
    resourceGroupName: string,
    circuitName: string,
    peeringName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ExpressRouteCircuitsGetPeeringStatsResponse>;
}
