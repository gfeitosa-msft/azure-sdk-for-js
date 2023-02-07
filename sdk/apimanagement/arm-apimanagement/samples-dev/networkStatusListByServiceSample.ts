/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the Connectivity Status to the external resources on which the Api Management service depends from inside the Cloud Service. This also returns the DNS Servers as visible to the CloudService.
 *
 * @summary Gets the Connectivity Status to the external resources on which the Api Management service depends from inside the Cloud Service. This also returns the DNS Servers as visible to the CloudService.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2021-08-01/examples/ApiManagementServiceGetNetworkStatus.json
 */
async function apiManagementServiceGetNetworkStatus() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.networkStatus.listByService(
    resourceGroupName,
    serviceName
  );
  console.log(result);
}

async function main() {
  apiManagementServiceGetNetworkStatus();
}

main().catch(console.error);
