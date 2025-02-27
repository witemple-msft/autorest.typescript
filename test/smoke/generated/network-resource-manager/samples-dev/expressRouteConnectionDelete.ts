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
 * This sample demonstrates how to Deletes a connection to a ExpressRoute circuit.
 *
 * @summary Deletes a connection to a ExpressRoute circuit.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRouteConnectionDelete.json
 */
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function expressRouteConnectionDelete() {
  const subscriptionId = "subid";
  const resourceGroupName = "resourceGroupName";
  const expressRouteGatewayName = "expressRouteGatewayName";
  const connectionName = "connectionName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteConnections.beginDeleteAndWait(
    resourceGroupName,
    expressRouteGatewayName,
    connectionName
  );
  console.log(result);
}

expressRouteConnectionDelete().catch(console.error);
