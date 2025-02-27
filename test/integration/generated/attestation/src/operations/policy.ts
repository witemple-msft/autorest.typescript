/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Policy } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GeneratedClient } from "../generatedClient";
import {
  AttestationType,
  PolicyGetOptionalParams,
  PolicyGetResponse,
  PolicySetModelOptionalParams,
  PolicySetModelResponse,
  PolicyResetOptionalParams,
  PolicyResetResponse
} from "../models";

/** Class containing Policy operations. */
export class PolicyImpl implements Policy {
  private readonly client: GeneratedClient;

  /**
   * Initialize a new instance of the class Policy class.
   * @param client Reference to the service client
   */
  constructor(client: GeneratedClient) {
    this.client = client;
  }

  /**
   * Retrieves the current policy for an attestation type.
   * @param attestationType Specifies the trusted execution environment to be used to validate the
   *                        evidence
   * @param options The options parameters.
   */
  get(
    attestationType: AttestationType,
    options?: PolicyGetOptionalParams
  ): Promise<PolicyGetResponse> {
    return this.client.sendOperationRequest(
      { attestationType, options },
      getOperationSpec
    );
  }

  /**
   * Sets the policy for a given attestation type.
   * @param attestationType Specifies the trusted execution environment to be used to validate the
   *                        evidence
   * @param newAttestationPolicy JWT Expressing the new policy whose body is a StoredAttestationPolicy
   *                             object.
   * @param options The options parameters.
   */
  set(
    attestationType: AttestationType,
    newAttestationPolicy: string,
    options?: PolicySetModelOptionalParams
  ): Promise<PolicySetModelResponse> {
    return this.client.sendOperationRequest(
      { attestationType, newAttestationPolicy, options },
      setOperationSpec
    );
  }

  /**
   * Resets the attestation policy for the specified tenant and reverts to the default policy.
   * @param attestationType Specifies the trusted execution environment to be used to validate the
   *                        evidence
   * @param policyJws JSON Web Signature with an empty policy document
   * @param options The options parameters.
   */
  reset(
    attestationType: AttestationType,
    policyJws: string,
    options?: PolicyResetOptionalParams
  ): Promise<PolicyResetResponse> {
    return this.client.sendOperationRequest(
      { attestationType, policyJws, options },
      resetOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/policies/{attestationType}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.instanceUrl, Parameters.attestationType],
  headerParameters: [Parameters.accept],
  serializer
};
const setOperationSpec: coreClient.OperationSpec = {
  path: "/policies/{attestationType}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.newAttestationPolicy,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.instanceUrl, Parameters.attestationType],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "text",
  serializer
};
const resetOperationSpec: coreClient.OperationSpec = {
  path: "/policies/{attestationType}:reset",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.PolicyResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.policyJws,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.instanceUrl, Parameters.attestationType],
  headerParameters: [Parameters.contentType, Parameters.accept1],
  mediaType: "text",
  serializer
};
