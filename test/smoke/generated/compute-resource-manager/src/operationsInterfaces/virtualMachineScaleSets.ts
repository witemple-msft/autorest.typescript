/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VirtualMachineScaleSet,
  VirtualMachineScaleSetSku,
  UpgradeOperationHistoricalStatusInfo,
  VirtualMachineScaleSetsCreateOrUpdateResponse,
  VirtualMachineScaleSetUpdate,
  VirtualMachineScaleSetsUpdateResponse,
  VirtualMachineScaleSetsGetResponse,
  VirtualMachineScaleSetsDeallocateOptionalParams,
  VirtualMachineScaleSetVMInstanceRequiredIDs,
  VirtualMachineScaleSetsGetInstanceViewResponse,
  VirtualMachineScaleSetsPowerOffOptionalParams,
  VirtualMachineScaleSetsRestartOptionalParams,
  VirtualMachineScaleSetsStartOptionalParams,
  VirtualMachineScaleSetsRedeployOptionalParams,
  VirtualMachineScaleSetsPerformMaintenanceOptionalParams,
  VirtualMachineScaleSetsReimageOptionalParams,
  VirtualMachineScaleSetsReimageAllOptionalParams,
  VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkResponse,
  VMScaleSetConvertToSinglePlacementGroupInput,
  OrchestrationServiceStateInput
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachineScaleSets. */
export interface VirtualMachineScaleSets {
  /**
   * Gets a list of all VM scale sets under a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualMachineScaleSet>;
  /**
   * Gets a list of all VM Scale Sets in the subscription, regardless of the associated resource group.
   * Use nextLink property in the response to get the next page of VM Scale Sets. Do this till nextLink
   * is null to fetch all the VM Scale Sets.
   * @param options The options parameters.
   */
  listAll(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualMachineScaleSet>;
  /**
   * Gets a list of SKUs available for your VM scale set, including the minimum and maximum VM instances
   * allowed for each SKU.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  listSkus(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualMachineScaleSetSku>;
  /**
   * Gets list of OS upgrades on a VM scale set instance.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  listOSUpgradeHistory(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<UpgradeOperationHistoricalStatusInfo>;
  /**
   * Create or update a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set to create or update.
   * @param parameters The scale set object.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VirtualMachineScaleSet,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetsCreateOrUpdateResponse>,
      VirtualMachineScaleSetsCreateOrUpdateResponse
    >
  >;
  /**
   * Update a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set to create or update.
   * @param parameters The scale set object.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VirtualMachineScaleSetUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      PollOperationState<VirtualMachineScaleSetsUpdateResponse>,
      VirtualMachineScaleSetsUpdateResponse
    >
  >;
  /**
   * Deletes a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Display information about a virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualMachineScaleSetsGetResponse>;
  /**
   * Deallocates specific virtual machines in a VM scale set. Shuts down the virtual machines and
   * releases the compute resources. You are not billed for the compute resources that this virtual
   * machine scale set deallocates.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  deallocate(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsDeallocateOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Deletes virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
   * @param options The options parameters.
   */
  deleteInstances(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the status of a VM scale set instance.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  getInstanceView(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualMachineScaleSetsGetInstanceViewResponse>;
  /**
   * Power off (stop) one or more virtual machines in a VM scale set. Note that resources are still
   * attached and you are getting charged for the resources. Instead, use deallocate to release resources
   * and avoid charges.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  powerOff(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPowerOffOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Restarts one or more virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  restart(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRestartOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Starts one or more virtual machines in a VM scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  start(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsStartOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Shuts down all the virtual machines in the virtual machine scale set, moves them to a new node, and
   * powers them back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  redeploy(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsRedeployOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which
   * are not eligible for perform maintenance will be failed. Please refer to best practices for more
   * details:
   * https://docs.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  performMaintenance(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsPerformMaintenanceOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Upgrades one or more virtual machines to the latest SKU set in the VM scale set model.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param vmInstanceIDs A list of virtual machine instance IDs from the VM scale set.
   * @param options The options parameters.
   */
  updateInstances(
    resourceGroupName: string,
    vmScaleSetName: string,
    vmInstanceIDs: VirtualMachineScaleSetVMInstanceRequiredIDs,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Reimages (upgrade the operating system) one or more virtual machines in a VM scale set which don't
   * have a ephemeral OS disk, for virtual machines who have a ephemeral OS disk the virtual machine is
   * reset to initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  reimage(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Reimages all the disks ( including data disks ) in the virtual machines in a VM scale set. This
   * operation is only supported for managed disks.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param options The options parameters.
   */
  reimageAll(
    resourceGroupName: string,
    vmScaleSetName: string,
    options?: VirtualMachineScaleSetsReimageAllOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Manual platform update domain walk to update virtual machines in a service fabric virtual machine
   * scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the VM scale set.
   * @param platformUpdateDomain The platform update domain for which a manual recovery walk is requested
   * @param options The options parameters.
   */
  forceRecoveryServiceFabricPlatformUpdateDomainWalk(
    resourceGroupName: string,
    vmScaleSetName: string,
    platformUpdateDomain: number,
    options?: coreHttp.OperationOptions
  ): Promise<
    VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkResponse
  >;
  /**
   * Converts SinglePlacementGroup property to false for a existing virtual machine scale set.
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the virtual machine scale set to create or update.
   * @param parameters The input object for ConvertToSinglePlacementGroup API.
   * @param options The options parameters.
   */
  convertToSinglePlacementGroup(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: VMScaleSetConvertToSinglePlacementGroupInput,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Changes ServiceState property for a given service
   * @param resourceGroupName The name of the resource group.
   * @param vmScaleSetName The name of the virtual machine scale set to create or update.
   * @param parameters The input object for SetOrchestrationServiceState API.
   * @param options The options parameters.
   */
  setOrchestrationServiceState(
    resourceGroupName: string,
    vmScaleSetName: string,
    parameters: OrchestrationServiceStateInput,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
}
