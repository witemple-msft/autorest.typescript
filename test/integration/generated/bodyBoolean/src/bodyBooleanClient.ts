/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { BoolImpl } from "./operations";
import { Bool } from "./operationsInterfaces";
import { BodyBooleanClientOptionalParams } from "./models";

export class BodyBooleanClient extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the BodyBooleanClient class.
   * @param options The parameter options
   */
  constructor(options?: BodyBooleanClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: BodyBooleanClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-body-boolean/1.0.0-preview1`;
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
    this.bool = new BoolImpl(this);
  }

  bool: Bool;
}
