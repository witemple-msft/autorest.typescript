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
 * This sample demonstrates how to Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 *
 * @summary Gets the effective routes configured for the Virtual Hub resource or the specified resource .
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/EffectiveRoutesListForVirtualHub.json
 */
import {
  EffectiveRoutesParameters,
  NetworkManagementClient
} from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function effectiveRoutesForTheVirtualHub() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualHubName = "virtualHub1";
  const effectiveRoutesParameters: EffectiveRoutesParameters = {};
  const options = { effectiveRoutesParameters: effectiveRoutesParameters };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualHubs.beginGetEffectiveVirtualHubRoutesAndWait(
    resourceGroupName,
    virtualHubName,
    options
  );
  console.log(result);
}

effectiveRoutesForTheVirtualHub().catch(console.error);
