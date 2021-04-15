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
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  ConnectionMonitorResult,
  ConnectionMonitor,
  ConnectionMonitorsCreateOrUpdateResponse,
  ConnectionMonitorsGetResponse,
  TagsObject,
  ConnectionMonitorsUpdateTagsResponse,
  ConnectionMonitorsQueryResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ConnectionMonitors. */
export interface ConnectionMonitors {
  /**
   * Lists all connection monitors for the specified Network Watcher.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    networkWatcherName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ConnectionMonitorResult>;
  /**
   * Create or update a connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param parameters Parameters that define the operation to create a connection monitor.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    parameters: ConnectionMonitor,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<ConnectionMonitorsCreateOrUpdateResponse>,
      ConnectionMonitorsCreateOrUpdateResponse
    >
  >;
  /**
   * Gets a connection monitor by name.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ConnectionMonitorsGetResponse>;
  /**
   * Deletes the specified connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Update tags of the specified connection monitor.
   * @param resourceGroupName The name of the resource group.
   * @param networkWatcherName The name of the network watcher.
   * @param connectionMonitorName The name of the connection monitor.
   * @param parameters Parameters supplied to update connection monitor tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<ConnectionMonitorsUpdateTagsResponse>;
  /**
   * Stops the specified connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  stop(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Starts the specified connection monitor.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name of the connection monitor.
   * @param options The options parameters.
   */
  start(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Query a snapshot of the most recent connection states.
   * @param resourceGroupName The name of the resource group containing Network Watcher.
   * @param networkWatcherName The name of the Network Watcher resource.
   * @param connectionMonitorName The name given to the connection monitor.
   * @param options The options parameters.
   */
  query(
    resourceGroupName: string,
    networkWatcherName: string,
    connectionMonitorName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<ConnectionMonitorsQueryResponse>,
      ConnectionMonitorsQueryResponse
    >
  >;
}
