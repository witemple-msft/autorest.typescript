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
  ManagedInstanceEncryptionProtector,
  EncryptionProtectorName,
  ManagedInstanceEncryptionProtectorsGetResponse,
  ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ManagedInstanceEncryptionProtectors. */
export interface ManagedInstanceEncryptionProtectors {
  /**
   * Gets a list of managed instance encryption protectors
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The options parameters.
   */
  listByInstance(
    resourceGroupName: string,
    managedInstanceName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<ManagedInstanceEncryptionProtector>;
  /**
   * Revalidates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param options The options parameters.
   */
  revalidate(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets a managed instance encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    options?: coreHttp.OperationOptions
  ): Promise<ManagedInstanceEncryptionProtectorsGetResponse>;
  /**
   * Updates an existing encryption protector.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param encryptionProtectorName The name of the encryption protector to be updated.
   * @param parameters The requested encryption protector resource state.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    managedInstanceName: string,
    encryptionProtectorName: EncryptionProtectorName,
    parameters: ManagedInstanceEncryptionProtector,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<
        ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse
      >,
      ManagedInstanceEncryptionProtectorsCreateOrUpdateResponse
    >
  >;
}
