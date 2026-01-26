// ------------------------------------------------------------
// Cosmos DB Server-Side API (Global Definitions)
// Option B: Optional parameters for ergonomic developer use
// Includes full JSDoc for IntelliSense and hover tooltips
// ------------------------------------------------------------

/**
 * Gets the current request context for the stored procedure or trigger.
 * Provides access to collection operations, request metadata, and response handling.
 */
declare function getContext(): IContext;

// ------------------------------------------------------------
// Context
// ------------------------------------------------------------

/**
 * Represents the execution context for a Cosmos DB server-side script.
 * Provides access to collection operations, request metadata, and response handling.
 */
interface IContext {
  /**
   * Gets the collection object used to perform CRUD and query operations.
   */
  getCollection(): ICollection;

  /**
   * Gets metadata about the incoming request.
   */
  getRequest(): IRequest;

  /**
   * Gets the response object used to set the script's output.
   */
  getResponse(): IResponse;
}

// ------------------------------------------------------------
// Collection
// ------------------------------------------------------------

/**
 * Provides CRUD and query operations against the current collection.
 */
interface ICollection {
  /**
   * Creates a new document in the collection.
   * @param collectionLink - The self-link of the collection.
   * @param body - The document to create.
   * @param options - Optional request options.
   * @param callback - Optional callback invoked with the created document.
   */
  createDocument(
    collectionLink: string,
    body: any,
    options?: any,
    callback?: (err: any, document: any) => void
  ): void;

  /**
   * Reads a document by its self-link.
   * @param documentLink - The self-link of the document.
   * @param options - Optional request options.
   * @param callback - Optional callback invoked with the retrieved document.
   */
  readDocument(
    documentLink: string,
    options?: any,
    callback?: (err: any, document: any) => void
  ): void;

  /**
   * Replaces an existing document.
   * @param documentLink - The self-link of the document.
   * @param body - The updated document body.
   * @param options - Optional request options.
   * @param callback - Optional callback invoked with the updated document.
   */
  replaceDocument(
    documentLink: string,
    body: any,
    options?: any,
    callback?: (err: any, document: any) => void
  ): void;

  /**
   * Deletes a document.
   * @param documentLink - The self-link of the document.
   * @param options - Optional request options.
   * @param callback - Optional callback invoked when the delete completes.
   */
  deleteDocument(
    documentLink: string,
    options?: any,
    callback?: (err: any) => void
  ): void;

  /**
   * Queries documents in the collection.
   * @param collectionLink - The self-link of the collection.
   * @param query - SQL string or query spec object.
   * @param options - Optional request options.
   * @param callback - Optional callback invoked with the result set.
   */
  queryDocuments(
    collectionLink: string,
    query: string | object,
    options?: any,
    callback?: (err: any, documents: any[]) => void
  ): void;

  /**
   * Queries stored procedures in the collection.
   * @param collectionLink - The self-link of the collection.
   * @param query - SQL string or query spec object.
   * @param options - Optional request options.
   * @param callback - Optional callback invoked with the result set.
   */
  queryStoredProcedures(
    collectionLink: string,
    query: string | object,
    options?: any,
    callback?: (err: any, sprocs: any[]) => void
  ): void;

  /**
   * Executes a stored procedure.
   * @param sprocLink - The self-link of the stored procedure.
   * @param params - Array of parameters passed to the stored procedure.
   * @param options - Optional request options.
   * @param callback - Optional callback invoked with the stored procedure result.
   */
  executeStoredProcedure(
    sprocLink: string,
    params: any[],
    options?: any,
    callback?: (err: any, result: any) => void
  ): void;
}

// ------------------------------------------------------------
// Request
// ------------------------------------------------------------

/**
 * Represents metadata about the incoming request.
 */
interface IRequest {
  /**
   * Gets the request body.
   */
  getBody(): any;

  /**
   * Gets the request value (alias for body in many cases).
   */
  getValue(): any;

  /**
   * Gets the operation type (e.g., Create, Read, Replace).
   */
  getOperationType(): string;

  /**
   * Gets the resource type (e.g., Documents, StoredProcedures).
   */
  getResourceType(): string;

  /**
   * Gets the request headers.
   */
  getHeaders(): any;

  /**
   * Sets the request body.
   */
  setBody(body: any): void;
}

// ------------------------------------------------------------
// Response
// ------------------------------------------------------------

/**
 * Represents the response returned from the server-side script.
 */
interface IResponse {
  /**
   * Sets the response body.
   */
  setBody(body: any): void;

  /**
   * Gets the response body.
   */
  getBody(): any;

  /**
   * Sets the HTTP status code for the response.
   */
  setStatusCode(code: number): void;

  /**
   * Gets the HTTP status code for the response.
   */
  getStatusCode(): number;
}
