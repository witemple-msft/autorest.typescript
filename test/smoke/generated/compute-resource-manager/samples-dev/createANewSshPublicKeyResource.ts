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
 * This sample demonstrates how to Creates a new SSH public key resource.
 *
 * @summary Creates a new SSH public key resource.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/examples/compute/CreateAnSshPublicKey.json
 */
import {
  SshPublicKeyResource,
  ComputeManagementClient
} from "@msinternal/compute-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createANewSshPublicKeyResource() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const sshPublicKeyName = "mySshPublicKeyName";
  const parameters: SshPublicKeyResource = {
    location: "westus",
    publicKey: "{ssh-rsa public key}"
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.sshPublicKeys.create(
    resourceGroupName,
    sshPublicKeyName,
    parameters
  );
  console.log(result);
}

createANewSshPublicKeyResource().catch(console.error);
