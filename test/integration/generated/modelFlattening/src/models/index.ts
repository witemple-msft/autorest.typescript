/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export interface Resource {
  /**
   * Resource Id
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource Type
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** Dictionary of <string> */
  tags?: { [propertyName: string]: string };
  /** Resource Location */
  location?: string;
  /**
   * Resource Name
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
}

export interface ErrorModel {
  status?: number;
  message?: string;
  parentError?: ErrorModel;
}

/** The wrapped produc. */
export interface WrappedProduct {
  /** the product value */
  value?: string;
}

/** The wrapped produc. */
export interface ProductWrapper {
  /** the product value */
  value?: string;
}

export interface ResourceCollection {
  /** Flattened product. */
  productresource?: FlattenedProduct;
  arrayofresources?: FlattenedProduct[];
  /** Dictionary of <FlattenedProduct> */
  dictionaryofresources?: { [propertyName: string]: FlattenedProduct };
}

/** The Generic URL. */
export interface GenericUrl {
  /** Generic URL value. */
  genericValue?: string;
}

/** The product documentation. */
export interface BaseProduct {
  /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
  productId: string;
  /** Description of product. */
  description?: string;
}

/** Flattened product. */
export type FlattenedProduct = Resource & {
  pName?: string;
  typePropertiesType?: string;
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningStateValues?: FlattenedProductPropertiesProvisioningStateValues;
  provisioningState?: string;
};

/** The product URL. */
export type ProductUrl = GenericUrl & {
  /** URL value. */
  odataValue?: string;
};

/** The product documentation. */
export type SimpleProduct = BaseProduct & {
  /** Display name of product. */
  maxProductDisplayName?: string;
  /** Capacity of product. For example, 4 people. */
  capacity?: "Large";
  /** Generic URL value. */
  genericValue?: string;
  /** URL value. */
  odataValue?: string;
};

/** Parameter group */
export interface FlattenParameterGroup {
  /** Product name with value 'groupproduct' */
  name: string;
  /** Simple body product to put */
  simpleBodyProduct?: SimpleProduct;
  /** Unique identifier representing a specific product for a given latitude & longitude. For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. */
  productId: string;
  /** Description of product. */
  description?: string;
  /** Display name of product. */
  maxProductDisplayName?: string;
  /** Capacity of product. For example, 4 people. */
  capacity?: "Large";
  /** Generic URL value. */
  genericValue?: string;
  /** URL value. */
  odataValue?: string;
}

/** Known values of {@link FlattenedProductPropertiesProvisioningStateValues} that the service accepts. */
export enum KnownFlattenedProductPropertiesProvisioningStateValues {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Canceled = "canceled",
  Accepted = "Accepted",
  Creating = "Creating",
  Created = "Created",
  Updating = "Updating",
  Updated = "Updated",
  Deleting = "Deleting",
  Deleted = "Deleted",
  OK = "OK"
}

/**
 * Defines values for FlattenedProductPropertiesProvisioningStateValues. \
 * {@link KnownFlattenedProductPropertiesProvisioningStateValues} can be used interchangeably with FlattenedProductPropertiesProvisioningStateValues,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **canceled** \
 * **Accepted** \
 * **Creating** \
 * **Created** \
 * **Updating** \
 * **Updated** \
 * **Deleting** \
 * **Deleted** \
 * **OK**
 */
export type FlattenedProductPropertiesProvisioningStateValues = string;

/** Optional parameters. */
export interface PutArrayOptionalParams extends coreClient.OperationOptions {
  /** External Resource as an Array to put */
  resourceArray?: Resource[];
}

/** Optional parameters. */
export interface GetArrayOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the getArray operation. */
export type GetArrayResponse = FlattenedProduct[];

/** Optional parameters. */
export interface PutWrappedArrayOptionalParams
  extends coreClient.OperationOptions {
  /** External Resource as an Array to put */
  resourceArray?: WrappedProduct[];
}

/** Optional parameters. */
export interface GetWrappedArrayOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getWrappedArray operation. */
export type GetWrappedArrayResponse = ProductWrapper[];

/** Optional parameters. */
export interface PutDictionaryOptionalParams
  extends coreClient.OperationOptions {
  /** External Resource as a Dictionary to put */
  resourceDictionary?: { [propertyName: string]: FlattenedProduct };
}

/** Optional parameters. */
export interface GetDictionaryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDictionary operation. */
export type GetDictionaryResponse = {
  [propertyName: string]: FlattenedProduct;
};

/** Optional parameters. */
export interface PutResourceCollectionOptionalParams
  extends coreClient.OperationOptions {
  /** External Resource as a ResourceCollection to put */
  resourceComplexObject?: ResourceCollection;
}

/** Optional parameters. */
export interface GetResourceCollectionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getResourceCollection operation. */
export type GetResourceCollectionResponse = ResourceCollection;

/** Optional parameters. */
export interface PutSimpleProductOptionalParams
  extends coreClient.OperationOptions {
  /** Simple body product to put */
  simpleBodyProduct?: SimpleProduct;
}

/** Contains response data for the putSimpleProduct operation. */
export type PutSimpleProductResponse = SimpleProduct;

/** Optional parameters. */
export interface PostFlattenedSimpleProductOptionalParams
  extends coreClient.OperationOptions {
  /** Description of product. */
  description?: string;
  /** Display name of product. */
  maxProductDisplayName?: string;
  /** Generic URL value. */
  genericValue?: string;
  /** URL value. */
  odataValue?: string;
}

/** Contains response data for the postFlattenedSimpleProduct operation. */
export type PostFlattenedSimpleProductResponse = SimpleProduct;

/** Optional parameters. */
export interface PutSimpleProductWithGroupingOptionalParams
  extends coreClient.OperationOptions {
  /** Description of product. */
  description?: string;
  /** Display name of product. */
  maxProductDisplayName?: string;
  /** Generic URL value. */
  genericValue?: string;
  /** URL value. */
  odataValue?: string;
}

/** Contains response data for the putSimpleProductWithGrouping operation. */
export type PutSimpleProductWithGroupingResponse = SimpleProduct;

/** Optional parameters. */
export interface ModelFlatteningClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
