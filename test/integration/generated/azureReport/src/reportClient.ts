/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  ReportClientOptionalParams,
  GetReportOptionalParams,
  GetReportResponse
} from "./models";

export class ReportClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the ReportClient class.
   * @param options The parameter options
   */
  constructor(options?: ReportClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ReportClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-zzzAzureReport/1.0.0-preview1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      baseUri: options.endpoint || "http://localhost:3000"
    };
    super(optionsWithDefaults);

    // Assigning values to Constant parameters
    this.$host = options.$host || "http://localhost:3000";
  }

  /**
   * Get test coverage report
   * @param options The options parameters.
   */
  getReport(options?: GetReportOptionalParams): Promise<GetReportResponse> {
    return this.sendOperationRequest({ options }, getReportOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getReportOperationSpec: coreClient.OperationSpec = {
  path: "/report/azure",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "Number" } } }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.qualifier],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
