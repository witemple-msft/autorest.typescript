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
 * This sample demonstrates how to Creates or updates the specified Network Virtual Appliance.
 *
 * @summary Creates or updates the specified Network Virtual Appliance.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/NetworkVirtualAppliancePut.json
 */
import {
  NetworkVirtualAppliance,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createNetworkVirtualAppliance() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const networkVirtualApplianceName = "nva";
  const parameters: NetworkVirtualAppliance = {
    bootStrapConfigurationBlobs: [
      "https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig"
    ],
    cloudInitConfigurationBlobs: [
      "https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig"
    ],
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/subid/resourcegroups/rg1/providers/MicrosoftManagedIdentity/userAssignedIdentities/identity1": {}
      }
    },
    location: "West US",
    nvaSku: {
      bundledScaleUnit: "1",
      marketPlaceVersion: "12.1",
      vendor: "Cisco SDWAN"
    },
    tags: { key1: "value1" },
    virtualApplianceAsn: 10000,
    virtualHub: {
      id:
        "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkVirtualAppliances.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkVirtualApplianceName,
    parameters
  );
  console.log(result);
}

createNetworkVirtualAppliance().catch(console.error);
