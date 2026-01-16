/**
 * Cosmos DB server-side JavaScript API
 * Accurate, minimal definitions for stored procedures and triggers.
 */

/**
 * Gets the context object for the current request.
 * The context provides access to the collection, request, and response objects.
 * @returns {IContext} The context object for the current operation.
 */
declare function getContext(): IContext;

/**
 * Context for the current Cosmos DB operation.
 * Provides access to the collection, request, and response objects.
 */
declare interface IContext {
  /**
   * Gets the collection object used to perform document operations.
   * @returns {ICollection} The collection object.
   */
  getCollection(): ICollection;

  /**
   * Gets the request object for the current operation.
   * In stored procedures, this represents the incoming request.
   * In triggers, this represents the triggering operation.
   * @returns {IRequest} The request object.
   */
  getRequest<T = any>(): IRequest<T>;

  /**
   * Gets the response object for the current operation.
   * In stored procedures, this is used to set the response body.
   * In triggers, this may be unused depending on trigger type.
   * @returns {IResponse} The response object.
   */
  getResponse(): IResponse;
}

/**
 * Represents the request associated with the current operation.
 * Provides access to the request body and metadata such as operation and trigger type.
 */
declare interface IRequest<T = any> {
  /**
   * Gets the request body.
   * For stored procedures, this is the input passed by the client.
   * For triggers, this may be the document being created or replaced.
   * @returns {T} The request body.
   */
  getBody(): T;

  /**
   * Sets the request body.
   * Primarily used in pre-triggers to modify the document before it is written.
   * @param {T} body The new request body.
   */
  setBody(body: T): void;

  /**
   * Gets the operation type for the current request.
   * Common values include "Create", "Replace", "Delete", and "Read".
   * @returns {string} The operation type.
   */
  getOperationType(): string;

  /**
   * Gets the trigger type for the current request, if applicable.
   * Common values include "Pre" and "Post" for triggers.
   * @returns {string} The trigger type.
   */
  getTriggerType(): string;
}

/**
 * Represents the response for the current operation.
 * Used in stored procedures to return a value to the client.
 */
declare interface IResponse {
  /**
   * Gets the response body.
   * @returns {any} The current response body.
   */
  getBody(): any;

  /**
   * Sets the response body.
   * In stored procedures, this is how you return a value to the client.
   * @param {any} body The response body to set.
   */
  setBody(body: any): void;
}

/**
 * Callback function for asynchronous collection operations.
 * @callback CollectionCallback
 * @param {Error | null} error Error if the operation failed; null on success.
 * @param {any} [resource] The resource returned by the operation (document, query results, etc.).
 * @param {{ continuation?: string }} [options] Additional options such as continuation token.
 */
declare type CollectionCallback = (
  error: Error | null,
  resource?: any,
  options?: { continuation?: string }
) => void;

/**
 * Represents the collection associated with the current operation.
 * Provides methods for performing CRUD and query operations on documents.
 */
declare interface ICollection {
  /**
   * Gets the self-link of the current collection.
   * @returns {string} The collection self-link.
   */
  getSelfLink(): string;

  /**
   * Creates a new document in the collection.
   * @param {string} collectionLink The self-link of the collection.
   * @param {any} document The document to create.
   * @param {any} [options] Optional request options (e.g., partition key).
   * @param {CollectionCallback} [callback] Callback invoked when the operation completes.
   * @returns {boolean} True if the operation was accepted for processing; false otherwise.
   */
  createDocument(
    collectionLink: string,
    document: any,
    options?: any,
    callback?: CollectionCallback
  ): boolean;

  /**
   * Reads a document from the collection.
   * @param {string} documentLink The self-link of the document to read.
   * @param {any} [options] Optional request options (e.g., partition key).
   * @param {CollectionCallback} [callback] Callback invoked when the operation completes.
   * @returns {boolean} True if the operation was accepted for processing; false otherwise.
   */
  readDocument(
    documentLink: string,
    options?: any,
    callback?: CollectionCallback
  ): boolean;

  /**
   * Replaces an existing document in the collection.
   * @param {string} documentLink The self-link of the document to replace.
   * @param {any} document The new document body.
   * @param {any} [options] Optional request options (e.g., access conditions).
   * @param {CollectionCallback} [callback] Callback invoked when the operation completes.
   * @returns {boolean} True if the operation was accepted for processing; false otherwise.
   */
  replaceDocument(
    documentLink: string,
    document: any,
    options?: any,
    callback?: CollectionCallback
  ): boolean;

  /**
   * Deletes a document from the collection.
   * @param {string} documentLink The self-link of the document to delete.
   * @param {any} [options] Optional request options (e.g., access conditions).
   * @param {CollectionCallback} [callback] Callback invoked when the operation completes.
   * @returns {boolean} True if the operation was accepted for processing; false otherwise.
   */
  deleteDocument(
    documentLink: string,
    options?: any,
    callback?: CollectionCallback
  ): boolean;

  /**
   * Executes a query against documents in the collection.
   * @param {string} collectionLink The self-link of the collection.
   * @param {string | any} query SQL query string or query specification object.
   * @param {{ continuation?: string; pageSize?: number }} [options] Query options such as continuation token and page size.
   * @param {CollectionCallback} [callback] Callback invoked with query results.
   * @returns {boolean} True if the operation was accepted for processing; false otherwise.
   */
  queryDocuments(
    collectionLink: string,
    query: string | any,
    options?: { continuation?: string; pageSize?: number },
    callback?: CollectionCallback
  ): boolean;
}
