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
  PrivateEndpointConnectionsGetResponse,
  PrivateEndpointConnection,
  PrivateEndpointConnectionsPutResponse,
  PrivateEndpointConnectionsDeleteResponse
} from "../models";

/** Interface representing a PrivateEndpointConnections. */
export interface PrivateEndpointConnections {
  /**
   * Gets the specified private endpoint connection associated with the key vault.
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
   *                                      vault.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vaultName: string,
    privateEndpointConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateEndpointConnectionsGetResponse>;
  /**
   * Updates the specified private endpoint connection associated with the key vault.
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
   *                                      vault.
   * @param properties The intended state of private endpoint connection.
   * @param options The options parameters.
   */
  put(
    resourceGroupName: string,
    vaultName: string,
    privateEndpointConnectionName: string,
    properties: PrivateEndpointConnection,
    options?: coreHttp.OperationOptions
  ): Promise<PrivateEndpointConnectionsPutResponse>;
  /**
   * Deletes the specified private endpoint connection associated with the key vault.
   * @param resourceGroupName Name of the resource group that contains the key vault.
   * @param vaultName The name of the key vault.
   * @param privateEndpointConnectionName Name of the private endpoint connection associated with the key
   *                                      vault.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vaultName: string,
    privateEndpointConnectionName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<PrivateEndpointConnectionsDeleteResponse>,
      PrivateEndpointConnectionsDeleteResponse
    >
  >;
}
