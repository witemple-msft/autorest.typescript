import { IntegrationRuntimeObjectMetadata } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DataFactoryClient } from "../dataFactoryClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  IntegrationRuntimeObjectMetadataRefreshOptionalParams,
  IntegrationRuntimeObjectMetadataRefreshResponse,
  IntegrationRuntimeObjectMetadataGetOptionalParams,
  IntegrationRuntimeObjectMetadataGetResponse
} from "../models";

/** Class containing IntegrationRuntimeObjectMetadata operations. */
export class IntegrationRuntimeObjectMetadataImpl
  implements IntegrationRuntimeObjectMetadata {
  private readonly client: DataFactoryClient;

  /**
   * Initialize a new instance of the class IntegrationRuntimeObjectMetadata class.
   * @param client Reference to the service client
   */
  constructor(client: DataFactoryClient) {
    this.client = client;
  }

  /**
   * Refresh a SSIS integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  async beginRefresh(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<IntegrationRuntimeObjectMetadataRefreshResponse>,
      IntegrationRuntimeObjectMetadataRefreshResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<IntegrationRuntimeObjectMetadataRefreshResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, factoryName, integrationRuntimeName, options },
      refreshOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Refresh a SSIS integration runtime object metadata.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  async beginRefreshAndWait(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataRefreshOptionalParams
  ): Promise<IntegrationRuntimeObjectMetadataRefreshResponse> {
    const poller = await this.beginRefresh(
      resourceGroupName,
      factoryName,
      integrationRuntimeName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Get a SSIS integration runtime object metadata by specified path. The return is pageable metadata
   * list.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param integrationRuntimeName The integration runtime name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    integrationRuntimeName: string,
    options?: IntegrationRuntimeObjectMetadataGetOptionalParams
  ): Promise<IntegrationRuntimeObjectMetadataGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, factoryName, integrationRuntimeName, options },
      getOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const refreshOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/refreshObjectMetadata",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SsisObjectMetadataStatusResponse
    },
    201: {
      bodyMapper: Mappers.SsisObjectMetadataStatusResponse
    },
    202: {
      bodyMapper: Mappers.SsisObjectMetadataStatusResponse
    },
    204: {
      bodyMapper: Mappers.SsisObjectMetadataStatusResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/integrationRuntimes/{integrationRuntimeName}/getObjectMetadata",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.SsisObjectMetadataListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.getMetadataRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.factoryName,
    Parameters.integrationRuntimeName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
