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
 * This sample demonstrates how to Lists all executions in a job agent.
 *
 * @summary Lists all executions in a job agent.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ListJobExecutionsByAgentWithFilter.json
 */
import { SqlManagementClient } from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function listAllJobExecutionsInAJobAgentWithFiltering() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "group1";
  const serverName = "server1";
  const jobAgentName = "agent1";
  const createTimeMin = new Date("2017-03-21T19:00:00Z");
  const createTimeMax = new Date("2017-03-21T19:05:00Z");
  const endTimeMin = new Date("2017-03-21T19:20:00Z");
  const endTimeMax = new Date("2017-03-21T19:25:00Z");
  const isActive = false;
  const options = {
    createTimeMin: createTimeMin,
    createTimeMax: createTimeMax,
    endTimeMin: endTimeMin,
    endTimeMax: endTimeMax,
    isActive: isActive
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.jobExecutions.listByAgent(
    resourceGroupName,
    serverName,
    jobAgentName,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllJobExecutionsInAJobAgentWithFiltering().catch(console.error);
