/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Gets the specified virtual network by resource group.
 *
 * @summary Gets the specified virtual network by resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/VirtualNetworkGetWithSubnetDelegation.json
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getVirtualNetworkWithADelegatedSubnet() {
  const subscriptionId = "subId";
  const resourceGroupName = "rg1";
  const virtualNetworkName = "test-vnet";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworks.get(
    resourceGroupName,
    virtualNetworkName
  );
  console.log(result);
}

getVirtualNetworkWithADelegatedSubnet().catch(console.error);
