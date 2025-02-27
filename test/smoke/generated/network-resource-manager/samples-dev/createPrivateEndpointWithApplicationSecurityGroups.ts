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
 * This sample demonstrates how to Creates or updates an private endpoint in the specified resource group.
 *
 * @summary Creates or updates an private endpoint in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PrivateEndpointCreateWithASG.json
 */
import {
  PrivateEndpoint,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createPrivateEndpointWithApplicationSecurityGroups() {
  const subscriptionId = "subId";
  const resourceGroupName = "rg1";
  const privateEndpointName = "testPe";
  const parameters: PrivateEndpoint = {
    applicationSecurityGroups: [
      {
        id:
          "/subscriptions/subId/resourceGroups/rg1/provders/Microsoft.Network/applicationSecurityGroup/asg1"
      }
    ],
    location: "eastus2euap",
    privateLinkServiceConnections: [
      {
        groupIds: ["groupIdFromResource"],
        privateLinkServiceId:
          "/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateLinkServices/testPls",
        requestMessage: "Please approve my connection."
      }
    ],
    subnet: {
      id:
        "/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.privateEndpoints.beginCreateOrUpdateAndWait(
    resourceGroupName,
    privateEndpointName,
    parameters
  );
  console.log(result);
}

createPrivateEndpointWithApplicationSecurityGroups().catch(console.error);
