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
 * This sample demonstrates how to Gets a list of all managed instances in an instance pool.
 *
 * @summary Gets a list of all managed instances in an instance pool.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceListByInstancePool.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function listManagedInstancesByInstancePool() {
  const subscriptionId = "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = "Test1";
  const instancePoolName = "pool1";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.managedInstances.listByInstancePool(
    resourceGroupName,
    instancePoolName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listManagedInstancesByInstancePool().catch(console.error);
