import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { OuContainerOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DomainServicesClient } from "../domainServicesClient";
import {
  OperationEntity,
  OuContainerOperationsListNextOptionalParams,
  OuContainerOperationsListOptionalParams,
  OuContainerOperationsListResponse,
  OuContainerOperationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing OuContainerOperations operations. */
export class OuContainerOperationsImpl implements OuContainerOperations {
  private readonly client: DomainServicesClient;

  /**
   * Initialize a new instance of the class OuContainerOperations class.
   * @param client Reference to the service client
   */
  constructor(client: DomainServicesClient) {
    this.client = client;
  }

  /**
   * Lists all the available OuContainer operations.
   * @param options The options parameters.
   */
  public list(
    options?: OuContainerOperationsListOptionalParams
  ): PagedAsyncIterableIterator<OperationEntity> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: OuContainerOperationsListOptionalParams
  ): AsyncIterableIterator<OperationEntity[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: OuContainerOperationsListOptionalParams
  ): AsyncIterableIterator<OperationEntity> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists all the available OuContainer operations.
   * @param options The options parameters.
   */
  private _list(
    options?: OuContainerOperationsListOptionalParams
  ): Promise<OuContainerOperationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: OuContainerOperationsListNextOptionalParams
  ): Promise<OuContainerOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.Aad/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationEntityListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationEntityListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
