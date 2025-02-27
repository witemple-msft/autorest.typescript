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
 * This sample demonstrates how to Creates or updates a job.
 *
 * @summary Creates or updates a job.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/CreateOrUpdateJobMax.json
 */
import { Job, SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createAJobWithAllPropertiesSpecified() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const jobName = "job1";
  const parameters: Job = {
    description: "my favourite job",
    schedule: {
      type: "Recurring",
      enabled: true,
      endTime: new Date("2015-09-24T23:59:59Z"),
      interval: "PT5M",
      startTime: new Date("2015-09-24T18:30:01Z")
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.jobs.createOrUpdate(
    resourceGroupName,
    serverName,
    jobAgentName,
    jobName,
    parameters
  );
  console.log(result);
}

createAJobWithAllPropertiesSpecified().catch(console.error);
