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
 * This sample demonstrates how to Deletes a managed instance.
 *
 * @summary Deletes a managed instance.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-05-01-preview/examples/ManagedInstanceDelete.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function deleteManagedInstance() {
  const subscriptionId = "20D7082A-0FC7-4468-82BD-542694D5042B";
  const resourceGroupName = "testrg";
  const managedInstanceName = "testinstance";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstances.beginDeleteAndWait(
    resourceGroupName,
    managedInstanceName
  );
  console.log(result);
}

deleteManagedInstance().catch(console.error);
