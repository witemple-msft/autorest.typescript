/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LRORetrys } from "../operationsInterfaces";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { LROClientContext } from "../lROClientContext";
import { LROPoller, shouldDeserializeLRO, LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  LRORetrysPut201CreatingSucceeded200OptionalParams,
  LRORetrysPut201CreatingSucceeded200Response,
  LRORetrysPutAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPutAsyncRelativeRetrySucceededResponse,
  LRORetrysDeleteProvisioning202Accepted200SucceededResponse,
  LRORetrysDelete202Retry200Response,
  LRORetrysDeleteAsyncRelativeRetrySucceededResponse,
  LRORetrysPost202Retry200OptionalParams,
  LRORetrysPost202Retry200Response,
  LRORetrysPostAsyncRelativeRetrySucceededOptionalParams,
  LRORetrysPostAsyncRelativeRetrySucceededResponse
} from "../models";

/** Class representing a LRORetrys. */
export class LRORetrysImpl implements LRORetrys {
  private readonly client: LROClientContext;

  /**
   * Initialize a new instance of the class LRORetrys class.
   * @param client Reference to the service client
   */
  constructor(client: LROClientContext) {
    this.client = client;
  }

  /**
   * Long running put request, service returns a 500, then a 201 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a
   * ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async put201CreatingSucceeded200(
    options?: LRORetrysPut201CreatingSucceeded200OptionalParams
  ): Promise<
    PollerLike<
      LROOperationState<LRORetrysPut201CreatingSucceeded200Response>,
      LRORetrysPut201CreatingSucceeded200Response
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPut201CreatingSucceeded200Response
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      put201CreatingSucceeded200OperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: put201CreatingSucceeded200OperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running put request, service returns a 500, then a 200 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async putAsyncRelativeRetrySucceeded(
    options?: LRORetrysPutAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    PollerLike<
      LROOperationState<LRORetrysPutAsyncRelativeRetrySucceededResponse>,
      LRORetrysPutAsyncRelativeRetrySucceededResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPutAsyncRelativeRetrySucceededResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      putAsyncRelativeRetrySucceededOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: putAsyncRelativeRetrySucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running delete request, service returns a 500, then a  202 to the initial request, with an
   * entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll
   * returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async deleteProvisioning202Accepted200Succeeded(
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<
        LRORetrysDeleteProvisioning202Accepted200SucceededResponse
      >,
      LRORetrysDeleteProvisioning202Accepted200SucceededResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysDeleteProvisioning202Accepted200SucceededResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteProvisioning202Accepted200SucceededOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteProvisioning202Accepted200SucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Polls return
   * this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’
   * @param options The options parameters.
   */
  async delete202Retry200(
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<LRORetrysDelete202Retry200Response>,
      LRORetrysDelete202Retry200Response
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysDelete202Retry200Response
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      delete202Retry200OperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: delete202Retry200OperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running delete request, service returns a 500, then a 202 to the initial request. Poll the
   * endpoint indicated in the Azure-AsyncOperation header for operation status
   * @param options The options parameters.
   */
  async deleteAsyncRelativeRetrySucceeded(
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<LRORetrysDeleteAsyncRelativeRetrySucceededResponse>,
      LRORetrysDeleteAsyncRelativeRetrySucceededResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysDeleteAsyncRelativeRetrySucceededResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      deleteAsyncRelativeRetrySucceededOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: deleteAsyncRelativeRetrySucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with 'Location'
   * and 'Retry-After' headers, Polls return a 200 with a response body after success
   * @param options The options parameters.
   */
  async post202Retry200(
    options?: LRORetrysPost202Retry200OptionalParams
  ): Promise<
    PollerLike<
      LROOperationState<LRORetrysPost202Retry200Response>,
      LRORetrysPost202Retry200Response
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPost202Retry200Response
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      post202Retry200OperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: post202Retry200OperationSpec,
      initialOperationResult,
      sendOperation
    });
  }

  /**
   * Long running post request, service returns a 500, then a 202 to the initial request, with an entity
   * that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation
   * header for operation status
   * @param options The options parameters.
   */
  async postAsyncRelativeRetrySucceeded(
    options?: LRORetrysPostAsyncRelativeRetrySucceededOptionalParams
  ): Promise<
    PollerLike<
      LROOperationState<LRORetrysPostAsyncRelativeRetrySucceededResponse>,
      LRORetrysPostAsyncRelativeRetrySucceededResponse
    >
  > {
    const operationArguments: coreHttp.OperationArguments = {
      options: this.getOperationOptions(options, "undefined")
    };
    const sendOperation = (
      args: coreHttp.OperationArguments,
      spec: coreHttp.OperationSpec
    ) => {
      return this.client.sendOperationRequest(args, spec) as Promise<
        LRORetrysPostAsyncRelativeRetrySucceededResponse
      >;
    };

    const initialOperationResult = await sendOperation(
      operationArguments,
      postAsyncRelativeRetrySucceededOperationSpec
    );
    return new LROPoller({
      initialOperationArguments: operationArguments,
      initialOperationSpec: postAsyncRelativeRetrySucceededOperationSpec,
      initialOperationResult,
      sendOperation
    });
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
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const put201CreatingSucceeded200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/put/201/creating/succeeded/200",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    202: {
      bodyMapper: Mappers.Product
    },
    204: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const putAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/putasync/retry/succeeded",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    201: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    202: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    204: {
      bodyMapper: Mappers.Product,
      headersMapper: Mappers.LRORetrysPutAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const deleteProvisioning202Accepted200SucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/delete/provisioning/202/accepted/200/succeeded",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.Product
    },
    201: {
      bodyMapper: Mappers.Product
    },
    202: {
      bodyMapper: Mappers.Product
    },
    204: {
      bodyMapper: Mappers.Product
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const delete202Retry200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/delete/202/retry/200",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    201: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    202: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    204: {
      headersMapper: Mappers.LRORetrysDelete202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/deleteasync/retry/succeeded",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    201: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    202: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    204: {
      headersMapper: Mappers.LRORetrysDeleteAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const post202Retry200OperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/post/202/retry/200",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    201: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    202: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    204: {
      headersMapper: Mappers.LRORetrysPost202Retry200Headers
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const postAsyncRelativeRetrySucceededOperationSpec: coreHttp.OperationSpec = {
  path: "/lro/retryerror/postasync/retry/succeeded",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    201: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    202: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    204: {
      headersMapper: Mappers.LRORetrysPostAsyncRelativeRetrySucceededHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.product,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
