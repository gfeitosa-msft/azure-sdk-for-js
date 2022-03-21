/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ShortCodesOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ShortCodesClientContext } from "../shortCodesClientContext";
import {
  ShortCode,
  ShortCodesGetShortCodesNextOptionalParams,
  ShortCodesGetShortCodesOptionalParams,
  USProgramBrief,
  ShortCodesGetUSProgramBriefsNextOptionalParams,
  ShortCodesGetUSProgramBriefsOptionalParams,
  ShortCodesGetShortCodesResponse,
  ShortCodesUpsertUSProgramBriefOptionalParams,
  ShortCodesUpsertUSProgramBriefResponse,
  ShortCodesDeleteUSProgramBriefOptionalParams,
  ShortCodesGetUSProgramBriefOptionalParams,
  ShortCodesGetUSProgramBriefResponse,
  ShortCodesSubmitUSProgramBriefOptionalParams,
  ShortCodesSubmitUSProgramBriefResponse,
  ShortCodesGetUSProgramBriefsResponse,
  ShortCodesGetShortCodesNextResponse,
  ShortCodesGetUSProgramBriefsNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ShortCodesOperations operations. */
export class ShortCodesOperationsImpl implements ShortCodesOperations {
  private readonly client: ShortCodesClientContext;

  /**
   * Initialize a new instance of the class ShortCodesOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ShortCodesClientContext) {
    this.client = client;
  }

  /**
   * Gets the list of short codes for the current resource.
   * @param options The options parameters.
   */
  public listShortCodes(
    options?: ShortCodesGetShortCodesOptionalParams
  ): PagedAsyncIterableIterator<ShortCode> {
    const iter = this.getShortCodesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getShortCodesPagingPage(options);
      }
    };
  }

  private async *getShortCodesPagingPage(
    options?: ShortCodesGetShortCodesOptionalParams
  ): AsyncIterableIterator<ShortCode[]> {
    let result = await this._getShortCodes(options);
    yield result.shortCodes || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getShortCodesNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.shortCodes || [];
    }
  }

  private async *getShortCodesPagingAll(
    options?: ShortCodesGetShortCodesOptionalParams
  ): AsyncIterableIterator<ShortCode> {
    for await (const page of this.getShortCodesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of US Program Briefs for the current resource.
   * @param options The options parameters.
   */
  public listUSProgramBriefs(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): PagedAsyncIterableIterator<USProgramBrief> {
    const iter = this.getUSProgramBriefsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getUSProgramBriefsPagingPage(options);
      }
    };
  }

  private async *getUSProgramBriefsPagingPage(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): AsyncIterableIterator<USProgramBrief[]> {
    let result = await this._getUSProgramBriefs(options);
    yield result.programBriefs || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getUSProgramBriefsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.programBriefs || [];
    }
  }

  private async *getUSProgramBriefsPagingAll(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): AsyncIterableIterator<USProgramBrief> {
    for await (const page of this.getUSProgramBriefsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of short codes for the current resource.
   * @param options The options parameters.
   */
  private _getShortCodes(
    options?: ShortCodesGetShortCodesOptionalParams
  ): Promise<ShortCodesGetShortCodesResponse> {
    return this.client.sendOperationRequest(
      { options },
      getShortCodesOperationSpec
    );
  }

  /**
   * Creates or updates a US Program Brief.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  upsertUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesUpsertUSProgramBriefOptionalParams
  ): Promise<ShortCodesUpsertUSProgramBriefResponse> {
    return this.client.sendOperationRequest(
      { programBriefId, options },
      upsertUSProgramBriefOperationSpec
    );
  }

  /**
   * Deletes a US Program Brief.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  deleteUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesDeleteUSProgramBriefOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { programBriefId, options },
      deleteUSProgramBriefOperationSpec
    );
  }

  /**
   * Get a US Program Brief by id.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  getUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesGetUSProgramBriefOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefResponse> {
    return this.client.sendOperationRequest(
      { programBriefId, options },
      getUSProgramBriefOperationSpec
    );
  }

  /**
   * Submits a US Program Brief for review.
   * @param programBriefId Program Brief Id. Must be a valid GUID
   * @param options The options parameters.
   */
  submitUSProgramBrief(
    programBriefId: string,
    options?: ShortCodesSubmitUSProgramBriefOptionalParams
  ): Promise<ShortCodesSubmitUSProgramBriefResponse> {
    return this.client.sendOperationRequest(
      { programBriefId, options },
      submitUSProgramBriefOperationSpec
    );
  }

  /**
   * Gets the list of US Program Briefs for the current resource.
   * @param options The options parameters.
   */
  private _getUSProgramBriefs(
    options?: ShortCodesGetUSProgramBriefsOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefsResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUSProgramBriefsOperationSpec
    );
  }

  /**
   * GetShortCodesNext
   * @param nextLink The nextLink from the previous successful call to the GetShortCodes method.
   * @param options The options parameters.
   */
  private _getShortCodesNext(
    nextLink: string,
    options?: ShortCodesGetShortCodesNextOptionalParams
  ): Promise<ShortCodesGetShortCodesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getShortCodesNextOperationSpec
    );
  }

  /**
   * GetUSProgramBriefsNext
   * @param nextLink The nextLink from the previous successful call to the GetUSProgramBriefs method.
   * @param options The options parameters.
   */
  private _getUSProgramBriefsNext(
    nextLink: string,
    options?: ShortCodesGetUSProgramBriefsNextOptionalParams
  ): Promise<ShortCodesGetUSProgramBriefsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      getUSProgramBriefsNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getShortCodesOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ShortCodes
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const upsertUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBrief
    },
    201: {
      bodyMapper: Mappers.USProgramBrief
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  requestBody: Parameters.body,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBrief
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept],
  serializer
};
const submitUSProgramBriefOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs/{programBriefId}/:submit",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBrief
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.programBriefId],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefsOperationSpec: coreClient.OperationSpec = {
  path: "/shortCodes/countries/US/programBriefs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBriefs
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const getShortCodesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ShortCodes
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
const getUSProgramBriefsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.USProgramBriefs
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse
    }
  },
  queryParameters: [Parameters.skip, Parameters.top, Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};