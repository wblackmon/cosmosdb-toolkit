/**
 * Returns the Cosmos DB server-side context object.
 * The context provides access to the request, response, and collection objects
 * available to stored procedures and triggers.
 */
declare function getContext(): IContext;

interface IContext {
  /** Returns the collection object for the current execution context. */
  getCollection(): ICollection;

  /** Returns the incoming request object. */
  getRequest(): IRequest;

  /** Returns the outgoing response object. */
  getResponse(): IResponse;
}

interface IRequest {
  /** Returns the request body for the current operation. */
  getBody(): any;

  /** Replaces the request body. */
  setBody(body: any): void;

  /** Returns the operation type (e.g., Create, Replace, Delete). */
  getOperationType(): string;

  /** Returns the trigger type (Pre or Post). */
  getTriggerType(): string;
}

interface IResponse {
  /** Gets the response body returned from the stored procedure. */
  getBody(): any;

  /** Sets the response body returned from the stored procedure. */
  setBody(body: any): void;
}

interface ICollection {
  /** Returns the self-link of the current collection. */
  getSelfLink(): string;

  /** Creates a new document in the collection. */
  createDocument(
    link: string,
    body: any,
    callback: (err: any, doc: any) => void
  ): boolean;

  /** Replaces an existing document. */
  replaceDocument(
    link: string,
    body: any,
    callback: (err: any, replaced: any) => void
  ): boolean;

  /** Deletes a document by link. */
  deleteDocument(
    link: string,
    callback: (err: any) => void
  ): boolean;

  /** Reads a document by link. */
  readDocument(
    link: string,
    callback: (err: any, doc: any) => void
  ): boolean;

  /** Queries documents using SQL or a parameterized query. */
  queryDocuments(
    link: string,
    filterQuery: string | { query: string; parameters?: any[] },
    callback: (err: any, results: any[], responseOptions: any) => void
  ): boolean;
}

/**
 * The console object is not available in Cosmos DB server-side JavaScript.
 * Using console.log() or other console methods has no effect and should be avoided.
 */
declare const console: never;
