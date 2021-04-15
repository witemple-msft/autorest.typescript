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
import { LROOperationState } from "../lro";
import { PollerLike } from "@azure/core-lro";
import {
  VirtualMachine,
  VirtualMachinesListAllNextOptionalParams,
  VirtualMachinesListAllOptionalParams,
  VirtualMachineSize,
  VirtualMachineCaptureParameters,
  VirtualMachinesCaptureResponse,
  VirtualMachinesCreateOrUpdateResponse,
  VirtualMachineUpdate,
  VirtualMachinesUpdateResponse,
  VirtualMachinesGetResponse,
  VirtualMachinesInstanceViewResponse,
  VirtualMachinesPowerOffOptionalParams,
  VirtualMachinesReimageOptionalParams,
  RunCommandInput,
  VirtualMachinesRunCommandResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VirtualMachines. */
export interface VirtualMachines {
  /**
   * Gets all the virtual machines under the specified subscription for the specified location.
   * @param location The location for which virtual machines under the subscription are queried.
   * @param options The options parameters.
   */
  listByLocation(
    location: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualMachine>;
  /**
   * Lists all of the virtual machines in the specified resource group. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualMachine>;
  /**
   * Lists all of the virtual machines in the specified subscription. Use the nextLink property in the
   * response to get the next page of virtual machines.
   * @param options The options parameters.
   */
  listAll(
    options?: VirtualMachinesListAllOptionalParams
  ): PagedAsyncIterableIterator<VirtualMachine>;
  /**
   * Lists all available virtual machine sizes to which the specified virtual machine can be resized.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  listAvailableSizes(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<VirtualMachineSize>;
  /**
   * Captures the VM by copying virtual hard disks of the VM and outputs a template that can be used to
   * create similar VMs.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Capture Virtual Machine operation.
   * @param options The options parameters.
   */
  capture(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineCaptureParameters,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<VirtualMachinesCaptureResponse>,
      VirtualMachinesCaptureResponse
    >
  >;
  /**
   * The operation to create or update a virtual machine. Please note some properties can be set only
   * during virtual machine creation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Create Virtual Machine operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachine,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<VirtualMachinesCreateOrUpdateResponse>,
      VirtualMachinesCreateOrUpdateResponse
    >
  >;
  /**
   * The operation to update a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Update Virtual Machine operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    vmName: string,
    parameters: VirtualMachineUpdate,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<VirtualMachinesUpdateResponse>,
      VirtualMachinesUpdateResponse
    >
  >;
  /**
   * The operation to delete a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Retrieves information about the model view or the instance view of a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualMachinesGetResponse>;
  /**
   * Retrieves information about the run-time state of a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  instanceView(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<VirtualMachinesInstanceViewResponse>;
  /**
   * Converts virtual machine disks from blob-based to managed disks. Virtual machine must be
   * stop-deallocated before invoking this operation.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  convertToManagedDisks(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Shuts down the virtual machine and releases the compute resources. You are not billed for the
   * compute resources that this virtual machine uses.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  deallocate(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Sets the OS state of the virtual machine to generalized. It is recommended to sysprep the virtual
   * machine before performing this operation. <br>For Windows, please refer to [Create a managed image
   * of a generalized VM in
   * Azure](https://docs.microsoft.com/en-us/azure/virtual-machines/windows/capture-image-resource).<br>For
   * Linux, please refer to [How to create an image of a virtual machine or
   * VHD](https://docs.microsoft.com/en-us/azure/virtual-machines/linux/capture-image).
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  generalize(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * The operation to power off (stop) a virtual machine. The virtual machine can be restarted with the
   * same provisioned resources. You are still charged for this virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  powerOff(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesPowerOffOptionalParams
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * The operation to reapply a virtual machine's state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  reapply(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * The operation to restart a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  restart(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * The operation to start a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  start(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Shuts down the virtual machine, moves it to a new node, and powers it back on.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  redeploy(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Reimages the virtual machine which has an ephemeral OS disk back to its initial state.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  reimage(
    resourceGroupName: string,
    vmName: string,
    options?: VirtualMachinesReimageOptionalParams
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * The operation to perform maintenance on a virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  performMaintenance(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<LROOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * The operation to simulate the eviction of spot virtual machine. The eviction will occur within 30
   * minutes of calling the API
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  simulateEviction(
    resourceGroupName: string,
    vmName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse>;
  /**
   * Run command on the VM.
   * @param resourceGroupName The name of the resource group.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the Run command operation.
   * @param options The options parameters.
   */
  runCommand(
    resourceGroupName: string,
    vmName: string,
    parameters: RunCommandInput,
    options?: coreHttp.OperationOptions
  ): Promise<
    PollerLike<
      LROOperationState<VirtualMachinesRunCommandResponse>,
      VirtualMachinesRunCommandResponse
    >
  >;
}
