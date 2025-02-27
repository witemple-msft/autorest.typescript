// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import "@azure/core-auth";
import { BodyFormDataRestClient } from "./clientDefinitions";

export default function BodyFormData(
  options: ClientOptions = {}
): BodyFormDataRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  const client = getClient(baseUrl, options) as BodyFormDataRestClient;

  return client;
}
