/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { WebSiteManagementClient } = require("@azure/arm-appservice");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Send a test notification that an upgrade is available for this App Service Environment.
 *
 * @summary Send a test notification that an upgrade is available for this App Service Environment.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2023-01-01/examples/AppServiceEnvironments_TestUpgradeAvailableNotification.json
 */
async function sendATestNotificationThatAnUpgradeIsAvailableForThisAppServiceEnvironment() {
  const subscriptionId =
    process.env["APPSERVICE_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPSERVICE_RESOURCE_GROUP"] || "rg";
  const name = "SampleHostingEnvironment";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.appServiceEnvironments.testUpgradeAvailableNotification(
    resourceGroupName,
    name
  );
  console.log(result);
}

async function main() {
  sendATestNotificationThatAnUpgradeIsAvailableForThisAppServiceEnvironment();
}

main().catch(console.error);
