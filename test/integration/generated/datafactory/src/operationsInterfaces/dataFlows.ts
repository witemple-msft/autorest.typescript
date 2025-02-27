import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DataFlowResource,
  DataFlowsListByFactoryOptionalParams,
  DataFlowsCreateOrUpdateOptionalParams,
  DataFlowsCreateOrUpdateResponse,
  DataFlowsGetOptionalParams,
  DataFlowsGetResponse,
  DataFlowsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataFlows. */
export interface DataFlows {
  /**
   * Lists data flows.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: DataFlowsListByFactoryOptionalParams
  ): PagedAsyncIterableIterator<DataFlowResource>;
  /**
   * Creates or updates a data flow.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param dataFlowName The data flow name.
   * @param dataFlow Data flow resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    dataFlowName: string,
    dataFlow: DataFlowResource,
    options?: DataFlowsCreateOrUpdateOptionalParams
  ): Promise<DataFlowsCreateOrUpdateResponse>;
  /**
   * Gets a data flow.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param dataFlowName The data flow name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    dataFlowName: string,
    options?: DataFlowsGetOptionalParams
  ): Promise<DataFlowsGetResponse>;
  /**
   * Deletes a data flow.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param dataFlowName The data flow name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    dataFlowName: string,
    options?: DataFlowsDeleteOptionalParams
  ): Promise<void>;
}
