/** 
 * Cosmos DB server-side JavaScript API (minimal authoritative definitions).
 * These types provide IntelliSense for stored procedures, triggers, and UDFs.
 */

/**
 * Returns the current Cosmos DB server-side context.
 * The context exposes request, response, and collection operations.
 */
declare function getContext(): IContext;

/**
 * Represents the Cosmos DB execution context for server-side JavaScript.
 * Provides access to the request, response, and collection objects.
 */
interface IContext {
  /**
   * Gets the collection object used for CRUD and query operations.
   */
  getCollection(): ICollection;

  /**
   * Gets the incoming request object.
   * Useful for triggers to inspect or modify the request body.
   */
  getRequest(): IRequest;

  /**
   * Gets the outgoing response object.
   * Stored procedures can set the response body here.
   */
  getResponse(): IResponse;
}

/**
 * Represents the collection object used to query, read, create,
 * and update documents within the current partition.
 */
interface ICollection {
  /**
   * Queries documents using SQL or a parameterized query.
   * @param collectionLink - Self-link of the collection.
   * @param filterQuery - SQL string or parameterized query object.
   * @param options - Query options such as continuation tokens.
   * @param callback - Called with (err, results, responseOptions).
   */
  queryDocuments(
    collectionLink: string,
    filterQuery: string | object,
    options: IRequestOptions,
    callback: (err: any, feed: any[], options: IQueryResponse) => void
  ): void;

  /**
   * Creates a new document in the collection.
   * @param collectionLink - Self-link of the collection.
   * @param body - The document to create.
   * @param options - Request options.
   * @param callback - Called with (err, createdDocument, responseOptions).
   */
  createDocument(
    collectionLink: string,
    body: object,
    options: IRequestOptions,
    callback: (err: any, document: any, options: IQueryResponse) => void
  ): void;

  /**
   * Reads a document by its self-link.
   * @param documentLink - Self-link of the document.
   * @param options - Request options.
   * @param callback - Called with (err, document, responseOptions).
   */
  readDocument(
    documentLink: string,
    options: IRequestOptions,
    callback: (err: any, document: any, options: IQueryResponse) => void
  ): void;
}

/**
 * Represents the incoming request for triggers.
 * Allows reading and modifying the request body.
 */
interface IRequest {
  /**
   * Gets the request body.
   */
  getBody(): any;

  /**
   * Replaces the request body.
   * @param body - New request body.
   */
  setBody(body: any): void;
}

/**
 * Represents the outgoing response for stored procedures.
 * Allows reading and modifying the response body.
 */
interface IResponse {
  /**
   * Gets the response body.
   */
  getBody(): any;

  /**
   * Sets the response body.
   * @param body - New response body.
   */
  setBody(body: any): void;
}

/**
 * Options for document operations and queries.
 */
interface IRequestOptions {
  /** Maximum number of items to return. */
  pageSize?: number;

  /** Continuation token for paginated queries. */
  continuation?: string;

  /** Whether to disable RU-per-minute usage. */
  disableRUPerMinuteUsage?: boolean;
}

/**
 * Metadata returned from queries and document operations.
 */
interface IQueryResponse {
  /** Continuation token for paginated results. */
  continuation?: string;
}
