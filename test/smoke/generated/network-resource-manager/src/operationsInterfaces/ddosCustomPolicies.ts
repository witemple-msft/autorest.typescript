/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  DdosCustomPoliciesGetResponse,
  DdosCustomPolicy,
  DdosCustomPoliciesCreateOrUpdateResponse,
  TagsObject,
  DdosCustomPoliciesUpdateTagsResponse
} from "../models";

/** Interface representing a DdosCustomPolicies. */
export interface DdosCustomPolicies {
  /**
   * Deletes the specified DDoS custom policy.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets information about the specified DDoS custom policy.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    options?: coreHttp.OperationOptions
  ): Promise<DdosCustomPoliciesGetResponse>;
  /**
   * Creates or updates a DDoS custom policy.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param parameters Parameters supplied to the create or update operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    parameters: DdosCustomPolicy,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<DdosCustomPoliciesCreateOrUpdateResponse>,
      DdosCustomPoliciesCreateOrUpdateResponse
    >
  >;
  /**
   * Update a DDoS custom policy tags.
   * @param resourceGroupName The name of the resource group.
   * @param ddosCustomPolicyName The name of the DDoS custom policy.
   * @param parameters Parameters supplied to update DDoS custom policy resource tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    ddosCustomPolicyName: string,
    parameters: TagsObject,
    options?: coreHttp.OperationOptions
  ): Promise<DdosCustomPoliciesUpdateTagsResponse>;
}
