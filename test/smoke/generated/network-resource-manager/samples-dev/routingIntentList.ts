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
 * This sample demonstrates how to Retrieves the details of all RoutingIntent child resources of the VirtualHub.
 *
 * @summary Retrieves the details of all RoutingIntent child resources of the VirtualHub.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/RoutingIntentList.json
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function routingIntentList() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.routingIntentOperations.list(
    resourceGroupName,
    virtualHubName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

routingIntentList().catch(console.error);
