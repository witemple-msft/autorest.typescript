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
 * This sample demonstrates how to Creates or updates a network security group in the specified resource group.
 *
 * @summary Creates or updates a network security group in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/NetworkSecurityGroupCreateWithRule.json
 */
import {
  NetworkSecurityGroup,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createNetworkSecurityGroupWithRule() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const networkSecurityGroupName = "testnsg";
  const parameters: NetworkSecurityGroup = {
    location: "eastus",
    securityRules: [
      {
        name: "rule1",
        access: "Allow",
        destinationAddressPrefix: "*",
        destinationPortRange: "80",
        direction: "Inbound",
        priority: 130,
        sourceAddressPrefix: "*",
        sourcePortRange: "*",
        protocol: "*"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkSecurityGroups.beginCreateOrUpdateAndWait(
    resourceGroupName,
    networkSecurityGroupName,
    parameters
  );
  console.log(result);
}

createNetworkSecurityGroupWithRule().catch(console.error);
