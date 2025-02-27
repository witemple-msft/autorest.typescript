/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { AuthenticationImpl } from "./operations";
import { Authentication } from "./operationsInterfaces";
import { SealedChoiceClientOptionalParams } from "./models";

export class SealedChoiceClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the SealedChoiceClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: SealedChoiceClientOptionalParams) {
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: SealedChoiceClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-sealedchoice/1.0.0-preview1`;
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
      baseUri: options.endpoint || "{$host}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.$host = $host;
    this.authentication = new AuthenticationImpl(this);
  }

  authentication: Authentication;
}
