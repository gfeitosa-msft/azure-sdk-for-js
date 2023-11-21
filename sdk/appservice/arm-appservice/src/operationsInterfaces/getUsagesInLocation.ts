/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CsmUsageQuota,
  GetUsagesInLocationListOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GetUsagesInLocation. */
export interface GetUsagesInLocation {
  /**
   * List usages in cores for all skus used by a subscription in a given location, for a specific quota
   * type.
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  list(
    location: string,
    options?: GetUsagesInLocationListOptionalParams
  ): PagedAsyncIterableIterator<CsmUsageQuota>;
}
