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
 * This sample demonstrates how to Create a outbound firewall rule with a given name.
 *
 * @summary Create a outbound firewall rule with a given name.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-02-01-preview/examples/OutboundFirewallRuleCreate.json
 */
import {
  OutboundFirewallRule,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function approveOrRejectAOutboundFirewallRuleWithAGivenName() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "sqlcrudtest-7398";
  const serverName = "sqlcrudtest-4645";
  const outboundRuleFqdn = "server.database.windows.net";
  const parameters: OutboundFirewallRule = {};
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.outboundFirewallRules.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serverName,
    outboundRuleFqdn,
    parameters
  );
  console.log(result);
}

approveOrRejectAOutboundFirewallRuleWithAGivenName().catch(console.error);
