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
 * This sample demonstrates how to Retrieves the details of a RoutingIntent.
 *
 * @summary Retrieves the details of a RoutingIntent.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/RoutingIntentGet.json
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function routeTableGet() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const routingIntentName = "Intent1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.routingIntentOperations.get(
    resourceGroupName,
    virtualHubName,
    routingIntentName
  );
  console.log(result);
}

routeTableGet().catch(console.error);
