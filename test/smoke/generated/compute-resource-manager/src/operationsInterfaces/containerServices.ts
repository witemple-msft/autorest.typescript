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
  ContainerService,
  ContainerServicesCreateOrUpdateResponse,
  ContainerServicesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ContainerServices. */
export interface ContainerServices {
  /**
   * Gets a list of container services in the specified subscription. The operation returns properties of
   * each container service including state, orchestrator, number of masters and agents, and FQDNs of
   * masters and agents.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ContainerService>;
  /**
   * Gets a list of container services in the specified subscription and resource group. The operation
   * returns properties of each container service including state, orchestrator, number of masters and
   * agents, and FQDNs of masters and agents.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ContainerService>;
  /**
   * Creates or updates a container service with the specified configuration of orchestrator, masters,
   * and agents.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param parameters Parameters supplied to the Create or Update a Container Service operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    containerServiceName: string,
    parameters: ContainerService,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<ContainerServicesCreateOrUpdateResponse>,
      ContainerServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Gets the properties of the specified container service in the specified subscription and resource
   * group. The operation returns the properties including state, orchestrator, number of masters and
   * agents, and FQDNs of masters and agents.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    containerServiceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<ContainerServicesGetResponse>;
  /**
   * Deletes the specified container service in the specified subscription and resource group. The
   * operation does not delete other resources created as part of creating a container service, including
   * storage accounts, VMs, and availability sets. All the other resources created with the container
   * service are part of the same resource group and can be deleted individually.
   * @param resourceGroupName The name of the resource group.
   * @param containerServiceName The name of the container service in the specified subscription and
   *                             resource group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    containerServiceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}
