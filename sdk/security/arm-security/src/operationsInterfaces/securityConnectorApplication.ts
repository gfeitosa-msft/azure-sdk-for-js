/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  SecurityConnectorApplicationGetOptionalParams,
  SecurityConnectorApplicationGetResponse,
  Application,
  SecurityConnectorApplicationCreateOrUpdateOptionalParams,
  SecurityConnectorApplicationCreateOrUpdateResponse,
  SecurityConnectorApplicationDeleteOptionalParams
} from "../models";

/** Interface representing a SecurityConnectorApplication. */
export interface SecurityConnectorApplication {
  /**
   * Get a specific application for the requested scope by applicationId
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param applicationId The security Application key - unique key for the standard application
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    securityConnectorName: string,
    applicationId: string,
    options?: SecurityConnectorApplicationGetOptionalParams
  ): Promise<SecurityConnectorApplicationGetResponse>;
  /**
   * Creates or update a security Application on the given security connector.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param applicationId The security Application key - unique key for the standard application
   * @param application Application over a subscription scope
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    securityConnectorName: string,
    applicationId: string,
    application: Application,
    options?: SecurityConnectorApplicationCreateOrUpdateOptionalParams
  ): Promise<SecurityConnectorApplicationCreateOrUpdateResponse>;
  /**
   * Delete an Application over a given scope
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param securityConnectorName The security connector name.
   * @param applicationId The security Application key - unique key for the standard application
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    securityConnectorName: string,
    applicationId: string,
    options?: SecurityConnectorApplicationDeleteOptionalParams
  ): Promise<void>;
}