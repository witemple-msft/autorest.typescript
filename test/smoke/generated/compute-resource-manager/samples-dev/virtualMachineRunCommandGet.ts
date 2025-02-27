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
 * This sample demonstrates how to Gets specific run command for a subscription in a location.
 *
 * @summary Gets specific run command for a subscription in a location.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/runCommands/VirtualMachineRunCommandGet.json
 */
import { ComputeManagementClient } from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function virtualMachineRunCommandGet() {
  const subscriptionId = "24fb23e3-6ba3-41f0-9b6e-e41131d5d61e";
  const location = "SoutheastAsia";
  const commandId = "RunPowerShellScript";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineRunCommands.get(
    location,
    commandId
  );
  console.log(result);
}

virtualMachineRunCommandGet().catch(console.error);
