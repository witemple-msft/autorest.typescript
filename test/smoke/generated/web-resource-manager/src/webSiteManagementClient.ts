/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { LROPoller, shouldDeserializeLRO } from "./lro";
import * as operations from "./operations";
import * as Parameters from "./models/parameters";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { WebSiteManagementClientContext } from "./webSiteManagementClientContext";
import {
  WebSiteManagementClientOptionalParams,
  WebSiteManagementClientGetPublishingUserResponse,
  User,
  WebSiteManagementClientUpdatePublishingUserResponse,
  WebSiteManagementClientListSourceControlsResponse,
  WebSiteManagementClientGetSourceControlResponse,
  SourceControl,
  WebSiteManagementClientUpdateSourceControlResponse,
  WebSiteManagementClientListBillingMetersOptionalParams,
  WebSiteManagementClientListBillingMetersResponse,
  ResourceNameAvailabilityRequest,
  WebSiteManagementClientCheckNameAvailabilityResponse,
  WebSiteManagementClientGetSubscriptionDeploymentLocationsResponse,
  WebSiteManagementClientListGeoRegionsOptionalParams,
  WebSiteManagementClientListGeoRegionsResponse,
  NameIdentifier,
  WebSiteManagementClientListSiteIdentifiersAssignedToHostNameResponse,
  WebSiteManagementClientListPremierAddOnOffersResponse,
  WebSiteManagementClientListSkusResponse,
  VnetParameters,
  WebSiteManagementClientVerifyHostingEnvironmentVnetResponse,
  CsmMoveResourceEnvelope,
  ValidateRequest,
  WebSiteManagementClientValidateResponse,
  WebSiteManagementClientListSourceControlsNextResponse,
  WebSiteManagementClientListBillingMetersNextOptionalParams,
  WebSiteManagementClientListBillingMetersNextResponse,
  WebSiteManagementClientListGeoRegionsNextOptionalParams,
  WebSiteManagementClientListGeoRegionsNextResponse,
  WebSiteManagementClientListSiteIdentifiersAssignedToHostNameNextResponse,
  WebSiteManagementClientListPremierAddOnOffersNextResponse
} from "./models";

class WebSiteManagementClient extends WebSiteManagementClientContext {
  /**
   * Initializes a new instance of the WebSiteManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Your Azure subscription ID. This is a GUID-formatted string (e.g.
   *                       00000000-0000-0000-0000-000000000000).
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: WebSiteManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.appServiceCertificateOrders = new operations.AppServiceCertificateOrders(
      this
    );
    this.certificateRegistrationProvider = new operations.CertificateRegistrationProvider(
      this
    );
    this.domains = new operations.Domains(this);
    this.topLevelDomains = new operations.TopLevelDomains(this);
    this.domainRegistrationProvider = new operations.DomainRegistrationProvider(
      this
    );
    this.certificates = new operations.Certificates(this);
    this.deletedWebApps = new operations.DeletedWebApps(this);
    this.diagnostics = new operations.Diagnostics(this);
    this.provider = new operations.Provider(this);
    this.recommendations = new operations.Recommendations(this);
    this.webApps = new operations.WebApps(this);
    this.staticSites = new operations.StaticSites(this);
    this.appServiceEnvironments = new operations.AppServiceEnvironments(this);
    this.appServicePlans = new operations.AppServicePlans(this);
    this.resourceHealthMetadata = new operations.ResourceHealthMetadata(this);
  }

  private getOperationOptions<TOptions extends coreHttp.OperationOptions>(
    options: TOptions | undefined,
    finalStateVia?: string
  ): coreHttp.RequestOptionsBase {
    const operationOptions: coreHttp.OperationOptions = options || {};
    operationOptions.requestOptions = {
      ...operationOptions.requestOptions,
      shouldDeserialize: shouldDeserializeLRO(finalStateVia)
    };
    return coreHttp.operationOptionsToRequestOptionsBase(operationOptions);
  }

  /**
   * Description for Gets publishing user
   * @param options The options parameters.
   */
  getPublishingUser(
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientGetPublishingUserResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getPublishingUserOperationSpec
    ) as Promise<WebSiteManagementClientGetPublishingUserResponse>;
  }

  /**
   * Description for Updates publishing user
   * @param userDetails Details of publishing user
   * @param options The options parameters.
   */
  updatePublishingUser(
    userDetails: User,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientUpdatePublishingUserResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { userDetails, options: operationOptions },
      updatePublishingUserOperationSpec
    ) as Promise<WebSiteManagementClientUpdatePublishingUserResponse>;
  }

  /**
   * Description for Gets the source controls available for Azure websites.
   * @param options The options parameters.
   */
  listSourceControls(
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientListSourceControlsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      listSourceControlsOperationSpec
    ) as Promise<WebSiteManagementClientListSourceControlsResponse>;
  }

  /**
   * Description for Gets source control token
   * @param sourceControlType Type of source control
   * @param options The options parameters.
   */
  getSourceControl(
    sourceControlType: string,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientGetSourceControlResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { sourceControlType, options: operationOptions },
      getSourceControlOperationSpec
    ) as Promise<WebSiteManagementClientGetSourceControlResponse>;
  }

  /**
   * Description for Updates source control token
   * @param sourceControlType Type of source control
   * @param requestMessage Source control token information
   * @param options The options parameters.
   */
  updateSourceControl(
    sourceControlType: string,
    requestMessage: SourceControl,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientUpdateSourceControlResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { sourceControlType, requestMessage, options: operationOptions },
      updateSourceControlOperationSpec
    ) as Promise<WebSiteManagementClientUpdateSourceControlResponse>;
  }

  /**
   * Description for Gets a list of meters for a given location.
   * @param options The options parameters.
   */
  listBillingMeters(
    options?: WebSiteManagementClientListBillingMetersOptionalParams
  ): Promise<WebSiteManagementClientListBillingMetersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      listBillingMetersOperationSpec
    ) as Promise<WebSiteManagementClientListBillingMetersResponse>;
  }

  /**
   * Description for Check if a resource name is available.
   * @param request Name availability request.
   * @param options The options parameters.
   */
  checkNameAvailability(
    request: ResourceNameAvailabilityRequest,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientCheckNameAvailabilityResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { request, options: operationOptions },
      checkNameAvailabilityOperationSpec
    ) as Promise<WebSiteManagementClientCheckNameAvailabilityResponse>;
  }

  /**
   * Description for Gets list of available geo regions plus ministamps
   * @param options The options parameters.
   */
  getSubscriptionDeploymentLocations(
    options?: coreHttp.OperationOptions
  ): Promise<
    WebSiteManagementClientGetSubscriptionDeploymentLocationsResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      getSubscriptionDeploymentLocationsOperationSpec
    ) as Promise<
      WebSiteManagementClientGetSubscriptionDeploymentLocationsResponse
    >;
  }

  /**
   * Description for Get a list of available geographical regions.
   * @param options The options parameters.
   */
  listGeoRegions(
    options?: WebSiteManagementClientListGeoRegionsOptionalParams
  ): Promise<WebSiteManagementClientListGeoRegionsResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      listGeoRegionsOperationSpec
    ) as Promise<WebSiteManagementClientListGeoRegionsResponse>;
  }

  /**
   * Description for List all apps that are assigned to a hostname.
   * @param nameIdentifier Hostname information.
   * @param options The options parameters.
   */
  listSiteIdentifiersAssignedToHostName(
    nameIdentifier: NameIdentifier,
    options?: coreHttp.OperationOptions
  ): Promise<
    WebSiteManagementClientListSiteIdentifiersAssignedToHostNameResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nameIdentifier, options: operationOptions },
      listSiteIdentifiersAssignedToHostNameOperationSpec
    ) as Promise<
      WebSiteManagementClientListSiteIdentifiersAssignedToHostNameResponse
    >;
  }

  /**
   * Description for List all premier add-on offers.
   * @param options The options parameters.
   */
  listPremierAddOnOffers(
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientListPremierAddOnOffersResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      listPremierAddOnOffersOperationSpec
    ) as Promise<WebSiteManagementClientListPremierAddOnOffersResponse>;
  }

  /**
   * Description for List all SKUs.
   * @param options The options parameters.
   */
  listSkus(
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientListSkusResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      listSkusOperationSpec
    ) as Promise<WebSiteManagementClientListSkusResponse>;
  }

  /**
   * Description for Verifies if this VNET is compatible with an App Service Environment by analyzing the
   * Network Security Group rules.
   * @param parameters VNET information
   * @param options The options parameters.
   */
  verifyHostingEnvironmentVnet(
    parameters: VnetParameters,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientVerifyHostingEnvironmentVnetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { parameters, options: operationOptions },
      verifyHostingEnvironmentVnetOperationSpec
    ) as Promise<WebSiteManagementClientVerifyHostingEnvironmentVnetResponse>;
  }

  /**
   * Description for Move resources between resource groups.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param moveResourceEnvelope Object that represents the resource to move.
   * @param options The options parameters.
   */
  move(
    resourceGroupName: string,
    moveResourceEnvelope: CsmMoveResourceEnvelope,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { resourceGroupName, moveResourceEnvelope, options: operationOptions },
      moveOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Description for Validate if a resource can be created.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param validateRequest Request with the resources to validate.
   * @param options The options parameters.
   */
  validate(
    resourceGroupName: string,
    validateRequest: ValidateRequest,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientValidateResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { resourceGroupName, validateRequest, options: operationOptions },
      validateOperationSpec
    ) as Promise<WebSiteManagementClientValidateResponse>;
  }

  /**
   * Description for Validate whether a resource can be moved.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param moveResourceEnvelope Object that represents the resource to move.
   * @param options The options parameters.
   */
  validateMove(
    resourceGroupName: string,
    moveResourceEnvelope: CsmMoveResourceEnvelope,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { resourceGroupName, moveResourceEnvelope, options: operationOptions },
      validateMoveOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * ListSourceControlsNext
   * @param nextLink The nextLink from the previous successful call to the ListSourceControls method.
   * @param options The options parameters.
   */
  listSourceControlsNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientListSourceControlsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      listSourceControlsNextOperationSpec
    ) as Promise<WebSiteManagementClientListSourceControlsNextResponse>;
  }

  /**
   * ListBillingMetersNext
   * @param nextLink The nextLink from the previous successful call to the ListBillingMeters method.
   * @param options The options parameters.
   */
  listBillingMetersNext(
    nextLink: string,
    options?: WebSiteManagementClientListBillingMetersNextOptionalParams
  ): Promise<WebSiteManagementClientListBillingMetersNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      listBillingMetersNextOperationSpec
    ) as Promise<WebSiteManagementClientListBillingMetersNextResponse>;
  }

  /**
   * ListGeoRegionsNext
   * @param nextLink The nextLink from the previous successful call to the ListGeoRegions method.
   * @param options The options parameters.
   */
  listGeoRegionsNext(
    nextLink: string,
    options?: WebSiteManagementClientListGeoRegionsNextOptionalParams
  ): Promise<WebSiteManagementClientListGeoRegionsNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      listGeoRegionsNextOperationSpec
    ) as Promise<WebSiteManagementClientListGeoRegionsNextResponse>;
  }

  /**
   * ListSiteIdentifiersAssignedToHostNameNext
   * @param nameIdentifier Hostname information.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListSiteIdentifiersAssignedToHostName method.
   * @param options The options parameters.
   */
  listSiteIdentifiersAssignedToHostNameNext(
    nameIdentifier: NameIdentifier,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    WebSiteManagementClientListSiteIdentifiersAssignedToHostNameNextResponse
  > {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nameIdentifier, nextLink, options: operationOptions },
      listSiteIdentifiersAssignedToHostNameNextOperationSpec
    ) as Promise<
      WebSiteManagementClientListSiteIdentifiersAssignedToHostNameNextResponse
    >;
  }

  /**
   * ListPremierAddOnOffersNext
   * @param nextLink The nextLink from the previous successful call to the ListPremierAddOnOffers method.
   * @param options The options parameters.
   */
  listPremierAddOnOffersNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<WebSiteManagementClientListPremierAddOnOffersNextResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {}
    );
    return this.sendOperationRequest(
      { nextLink, options: operationOptions },
      listPremierAddOnOffersNextOperationSpec
    ) as Promise<WebSiteManagementClientListPremierAddOnOffersNextResponse>;
  }

  appServiceCertificateOrders: operations.AppServiceCertificateOrders;
  certificateRegistrationProvider: operations.CertificateRegistrationProvider;
  domains: operations.Domains;
  topLevelDomains: operations.TopLevelDomains;
  domainRegistrationProvider: operations.DomainRegistrationProvider;
  certificates: operations.Certificates;
  deletedWebApps: operations.DeletedWebApps;
  diagnostics: operations.Diagnostics;
  provider: operations.Provider;
  recommendations: operations.Recommendations;
  webApps: operations.WebApps;
  staticSites: operations.StaticSites;
  appServiceEnvironments: operations.AppServiceEnvironments;
  appServicePlans: operations.AppServicePlans;
  resourceHealthMetadata: operations.ResourceHealthMetadata;
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getPublishingUserOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.Web/publishingUsers/web",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  serializer
};
const updatePublishingUserOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.Web/publishingUsers/web",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.User
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.userDetails,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listSourceControlsOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.Web/sourcecontrols",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  serializer
};
const getSourceControlOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.Web/sourcecontrols/{sourceControlType}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.sourceControlType],
  serializer
};
const updateSourceControlOperationSpec: coreHttp.OperationSpec = {
  path: "/providers/Microsoft.Web/sourcecontrols/{sourceControlType}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControl
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.requestMessage,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.sourceControlType],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listBillingMetersOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/billingMeters",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingMeterCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.billingLocation,
    Parameters.osType
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const checkNameAvailabilityOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/checknameavailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceNameAvailability
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const getSubscriptionDeploymentLocationsOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/deploymentLocations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentLocations
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listGeoRegionsOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/geoRegions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GeoRegionCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.sku,
    Parameters.linuxWorkersEnabled,
    Parameters.xenonWorkersEnabled,
    Parameters.linuxDynamicWorkersEnabled
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listSiteIdentifiersAssignedToHostNameOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/listSitesAssignedToHostName",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.nameIdentifier1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listPremierAddOnOffersOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/premieraddonoffers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PremierAddOnOfferCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const listSkusOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Web/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SkuInfos
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  serializer
};
const verifyHostingEnvironmentVnetOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Web/verifyHostingEnvironmentVnet",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.VnetValidationFailureDetails
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const moveOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/moveResources",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.moveResourceEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const validateOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/validate",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ValidateResponse
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.validateRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const validateMoveOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/validateMoveResources",
  httpMethod: "POST",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.moveResourceEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listSourceControlsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SourceControlCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink23],
  serializer
};
const listBillingMetersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BillingMeterCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.billingLocation,
    Parameters.osType
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink24
  ],
  serializer
};
const listGeoRegionsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GeoRegionCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.sku,
    Parameters.linuxWorkersEnabled,
    Parameters.xenonWorkersEnabled,
    Parameters.linuxDynamicWorkersEnabled
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink25
  ],
  serializer
};
const listSiteIdentifiersAssignedToHostNameNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.IdentifierCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.nameIdentifier1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink26
  ],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer
};
const listPremierAddOnOffersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PremierAddOnOfferCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink27
  ],
  serializer
};

// Operation Specifications

export {
  WebSiteManagementClient,
  WebSiteManagementClientContext,
  Models as WebSiteManagementModels,
  Mappers as WebSiteManagementMappers
};
export * from "./operations";
