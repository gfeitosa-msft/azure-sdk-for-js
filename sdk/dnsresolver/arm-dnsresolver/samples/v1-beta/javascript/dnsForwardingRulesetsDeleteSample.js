/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { DnsResolverManagementClient } = require("@azure/arm-dnsresolver");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules within the ruleset will be deleted.
 *
 * @summary Deletes a DNS forwarding ruleset. WARNING: This operation cannot be undone. All forwarding rules within the ruleset will be deleted.
 * x-ms-original-file: specification/dnsresolver/resource-manager/Microsoft.Network/preview/2020-04-01-preview/examples/DnsForwardingRuleset_Delete.json
 */
async function deleteDnsForwardingRuleset() {
  const subscriptionId = "abdd4249-9f34-4cc6-8e42-c2e32110603e";
  const resourceGroupName = "sampleResourceGroup";
  const dnsForwardingRulesetName = "samplednsForwardingRulesetName";
  const credential = new DefaultAzureCredential();
  const client = new DnsResolverManagementClient(credential, subscriptionId);
  const result = await client.dnsForwardingRulesets.beginDeleteAndWait(
    resourceGroupName,
    dnsForwardingRulesetName
  );
  console.log(result);
}

deleteDnsForwardingRuleset().catch(console.error);