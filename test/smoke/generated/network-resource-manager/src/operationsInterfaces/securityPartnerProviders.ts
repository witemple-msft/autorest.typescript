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
  SecurityPartnerProvider,
  SecurityPartnerProvidersGetResponse,
  SecurityPartnerProvidersCreateOrUpdateResponse,
  TagsObject,
  SecurityPartnerProvidersUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a SecurityPartnerProviders. */
export interface SecurityPartnerProviders {
  /**
   * Lists all Security Partner Providers in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<SecurityPartnerProvider>;
  /**
   * Gets all the Security Partner Providers in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<SecurityPartnerProvider>;
  /**
   * Deletes the specified Security Partner Provider.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified Security Partner Provider.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersGetResponse>;
  /**
   * Creates or updates the specified Security Partner Provider.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param parameters Parameters supplied to the create or update Security Partner Provider operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    parameters: SecurityPartnerProvider,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<SecurityPartnerProvidersCreateOrUpdateResponse>,
      SecurityPartnerProvidersCreateOrUpdateResponse
    >
  >;
  /**
   * Updates tags of a Security Partner Provider resource.
   * @param resourceGroupName The name of the resource group.
   * @param securityPartnerProviderName The name of the Security Partner Provider.
   * @param parameters Parameters supplied to update Security Partner Provider tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    securityPartnerProviderName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<SecurityPartnerProvidersUpdateTagsResponse>;
}
