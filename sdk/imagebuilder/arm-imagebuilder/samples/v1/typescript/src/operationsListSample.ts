/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ImageBuilderClient } from "@azure/arm-imagebuilder";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists available operations for the Microsoft.VirtualMachineImages provider
 *
 * @summary Lists available operations for the Microsoft.VirtualMachineImages provider
 * x-ms-original-file: specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/stable/2021-10-01/examples/OperationsList.json
 */
async function retrieveOperationsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ImageBuilderClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.operations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

retrieveOperationsList().catch(console.error);