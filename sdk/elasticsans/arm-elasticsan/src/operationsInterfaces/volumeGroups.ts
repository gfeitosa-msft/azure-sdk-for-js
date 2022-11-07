/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  VolumeGroup,
  VolumeGroupsListByElasticSanOptionalParams,
  VolumeGroupsCreateOptionalParams,
  VolumeGroupsCreateResponse,
  VolumeGroupUpdate,
  VolumeGroupsUpdateOptionalParams,
  VolumeGroupsUpdateResponse,
  VolumeGroupsDeleteOptionalParams,
  VolumeGroupsGetOptionalParams,
  VolumeGroupsGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a VolumeGroups. */
export interface VolumeGroups {
  /**
   * List VolumeGroups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param options The options parameters.
   */
  listByElasticSan(
    resourceGroupName: string,
    elasticSanName: string,
    options?: VolumeGroupsListByElasticSanOptionalParams
  ): PagedAsyncIterableIterator<VolumeGroup>;
  /**
   * Create a Volume Group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  beginCreate(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroup,
    options?: VolumeGroupsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VolumeGroupsCreateResponse>,
      VolumeGroupsCreateResponse
    >
  >;
  /**
   * Create a Volume Group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  beginCreateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroup,
    options?: VolumeGroupsCreateOptionalParams
  ): Promise<VolumeGroupsCreateResponse>;
  /**
   * Update an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroupUpdate,
    options?: VolumeGroupsUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<VolumeGroupsUpdateResponse>,
      VolumeGroupsUpdateResponse
    >
  >;
  /**
   * Update an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param parameters Volume Group object.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    parameters: VolumeGroupUpdate,
    options?: VolumeGroupsUpdateOptionalParams
  ): Promise<VolumeGroupsUpdateResponse>;
  /**
   * Delete an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>>;
  /**
   * Delete an VolumeGroup.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Get an VolumeGroups.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param elasticSanName The name of the ElasticSan.
   * @param volumeGroupName The name of the VolumeGroup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    elasticSanName: string,
    volumeGroupName: string,
    options?: VolumeGroupsGetOptionalParams
  ): Promise<VolumeGroupsGetResponse>;
}