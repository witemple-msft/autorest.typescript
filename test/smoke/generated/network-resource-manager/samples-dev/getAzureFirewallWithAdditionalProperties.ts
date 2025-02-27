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
 * This sample demonstrates how to Gets the specified Azure Firewall.
 *
 * @summary Gets the specified Azure Firewall.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/AzureFirewallGetWithAdditionalProperties.json
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function getAzureFirewallWithAdditionalProperties() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const azureFirewallName = "azurefirewall";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.azureFirewalls.get(
    resourceGroupName,
    azureFirewallName
  );
  console.log(result);
}

getAzureFirewallWithAdditionalProperties().catch(console.error);
