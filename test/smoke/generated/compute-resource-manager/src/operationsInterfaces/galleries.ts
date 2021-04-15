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
  Gallery,
  GalleriesCreateOrUpdateResponse,
  GalleryUpdate,
  GalleriesUpdateResponse,
  GalleriesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Galleries. */
export interface Galleries {
  /**
   * List galleries under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Gallery>;
  /**
   * List galleries under a subscription.
   * @param options The options parameters.
   */
  list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Gallery>;
  /**
   * Create or update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
   *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the create or update Shared Image Gallery operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    gallery: Gallery,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<GalleriesCreateOrUpdateResponse>,
      GalleriesCreateOrUpdateResponse
    >
  >;
  /**
   * Update a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery. The allowed characters are alphabets and
   *                    numbers with dots and periods allowed in the middle. The maximum length is 80 characters.
   * @param gallery Parameters supplied to the update Shared Image Gallery operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    galleryName: string,
    gallery: GalleryUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<GalleriesUpdateResponse>,
      GalleriesUpdateResponse
    >
  >;
  /**
   * Retrieves information about a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<GalleriesGetResponse>;
  /**
   * Delete a Shared Image Gallery.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery to be deleted.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    galleryName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}
