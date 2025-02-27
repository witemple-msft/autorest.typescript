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
 * This sample demonstrates how to Description for Updates a user entry with the listed roles
 *
 * @summary Description for Updates a user entry with the listed roles
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/UpdateStaticSiteUser.json
 */
import {
  StaticSiteUserARMResource,
  WebSiteManagementClient
} from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

async function createOrUpdateAUserForAStaticSite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const authprovider = "aad";
  const userid = "1234";
  const staticSiteUserEnvelope: StaticSiteUserARMResource = {
    roles: "contributor"
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.updateStaticSiteUser(
    resourceGroupName,
    name,
    authprovider,
    userid,
    staticSiteUserEnvelope
  );
  console.log(result);
}

createOrUpdateAUserForAStaticSite().catch(console.error);
