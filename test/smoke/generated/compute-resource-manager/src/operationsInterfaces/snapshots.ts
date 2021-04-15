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
  Snapshot,
  SnapshotsCreateOrUpdateResponse,
  SnapshotUpdate,
  SnapshotsUpdateResponse,
  SnapshotsGetResponse,
  GrantAccessData,
  SnapshotsGrantAccessResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Snapshots. */
export interface Snapshots {
  /**
   * Lists snapshots under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Snapshot>;
  /**
   * Lists snapshots under a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Snapshot>;
  /**
   * Creates or updates a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Put disk operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: Snapshot,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<SnapshotsCreateOrUpdateResponse>,
      SnapshotsCreateOrUpdateResponse
    >
  >;
  /**
   * Updates (patches) a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param snapshot Snapshot object supplied in the body of the Patch snapshot operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    snapshotName: string,
    snapshot: SnapshotUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<SnapshotsUpdateResponse>,
      SnapshotsUpdateResponse
    >
  >;
  /**
   * Gets information about a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    snapshotName: string,
    options?: coreHttp.OperationOptions
  ): Promise<SnapshotsGetResponse>;
  /**
   * Deletes a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    snapshotName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Grants access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param grantAccessData Access data object supplied in the body of the get snapshot access operation.
   * @param options The options parameters.
   */
  grantAccess(
    resourceGroupName: string,
    snapshotName: string,
    grantAccessData: GrantAccessData,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<SnapshotsGrantAccessResponse>,
      SnapshotsGrantAccessResponse
    >
  >;
  /**
   * Revokes access to a snapshot.
   * @param resourceGroupName The name of the resource group.
   * @param snapshotName The name of the snapshot that is being created. The name can't be changed after
   *                     the snapshot is created. Supported characters for the name are a-z, A-Z, 0-9 and _. The max name
   *                     length is 80 characters.
   * @param options The options parameters.
   */
  revokeAccess(
    resourceGroupName: string,
    snapshotName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}
