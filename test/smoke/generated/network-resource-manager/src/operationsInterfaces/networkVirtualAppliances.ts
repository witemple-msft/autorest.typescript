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
  NetworkVirtualAppliance,
  NetworkVirtualAppliancesGetOptionalParams,
  NetworkVirtualAppliancesGetResponse,
  TagsObject,
  NetworkVirtualAppliancesUpdateTagsResponse,
  NetworkVirtualAppliancesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NetworkVirtualAppliances. */
export interface NetworkVirtualAppliances {
  /**
   * Lists all Network Virtual Appliances in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<NetworkVirtualAppliance>;
  /**
   * Gets all Network Virtual Appliances in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<NetworkVirtualAppliance>;
  /**
   * Deletes the specified Network Virtual Appliance.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of Network Virtual Appliance.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified Network Virtual Appliance.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of Network Virtual Appliance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    options?: NetworkVirtualAppliancesGetOptionalParams
  ): Promise<NetworkVirtualAppliancesGetResponse>;
  /**
   * Updates a Network Virtual Appliance.
   * @param resourceGroupName The resource group name of Network Virtual Appliance.
   * @param networkVirtualApplianceName The name of Network Virtual Appliance being updated.
   * @param parameters Parameters supplied to Update Network Virtual Appliance Tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<NetworkVirtualAppliancesUpdateTagsResponse>;
  /**
   * Creates or updates the specified Network Virtual Appliance.
   * @param resourceGroupName The name of the resource group.
   * @param networkVirtualApplianceName The name of Network Virtual Appliance.
   * @param parameters Parameters supplied to the create or update Network Virtual Appliance.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkVirtualApplianceName: string,
    parameters: NetworkVirtualAppliance,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<NetworkVirtualAppliancesCreateOrUpdateResponse>,
      NetworkVirtualAppliancesCreateOrUpdateResponse
    >
  >;
}
