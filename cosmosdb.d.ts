/**
 * Type definitions for Azure Cosmos DB server-side JavaScript API
 * Used in stored procedures, triggers, and user-defined functions
 */

/**
 * Gets the context object that provides access to all operations that can be performed
 * on Azure Cosmos DB data, as well as access to the request and response objects.
 * @returns {IContext} The context object for the current request
 */
declare function getContext(): IContext;

/**
 * The Context object provides access to all operations that can be performed on Azure Cosmos DB data,
 * as well as access to the request and response objects.
 */
declare interface IContext {
    /**
     * Gets the request object associated with the current operation.
     * @returns {IRequest} The request object
     */
    getRequest(): IRequest;

    /**
     * Gets the response object associated with the current operation.
     * @returns {IResponse} The response object
     */
    getResponse(): IResponse;

    /**
     * Gets the collection object for performing operations on documents.
     * @returns {ICollection} The collection object
     */
    getCollection(): ICollection;
}

/**
 * Represents the request object containing information about the current operation.
 */
declare interface IRequest {
    /**
     * Gets the request body.
     * @returns {any} The request body
     */
    getBody(): any;

    /**
     * Sets the request body.
     * @param {any} body - The new request body
     */
    setBody(body: any): void;

    /**
     * Gets a value from the request headers.
     * @param {string} key - The header key
     * @returns {string} The header value
     */
    getValue(key: string): string;

    /**
     * Sets a value in the request headers.
     * @param {string} key - The header key
     * @param {string} value - The header value
     */
    setValue(key: string, value: string): void;
}

/**
 * Represents the response object for returning data from the current operation.
 */
declare interface IResponse {
    /**
     * Gets the response body.
     * @returns {any} The response body
     */
    getBody(): any;

    /**
     * Sets the response body.
     * @param {any} body - The response body to set
     */
    setBody(body: any): void;

    /**
     * Gets a value from the response headers.
     * @param {string} key - The header key
     * @returns {string} The header value
     */
    getValue(key: string): string;

    /**
     * Sets a value in the response headers.
     * @param {string} key - The header key
     * @param {string} value - The header value
     */
    setValue(key: string, value: string): void;
}

/**
 * Query options for collection operations.
 */
declare interface IQueryOptions {
    /**
     * Continuation token for paginated queries.
     */
    continuation?: string;

    /**
     * Maximum number of items to return.
     */
    pageSize?: number;
}

/**
 * Callback function for asynchronous collection operations.
 * @callback CollectionCallback
 * @param {Error} error - Error object if operation failed, null otherwise
 * @param {any} resource - The resource returned by the operation (document, query results, etc.)
 * @param {Object} options - Additional response options (e.g., continuation token)
 */
declare type CollectionCallback = (error: Error | null, resource?: any, options?: any) => void;

/**
 * The Collection object provides methods for performing CRUD operations on documents
 * within the current collection.
 */
declare interface ICollection {
    /**
     * Gets the self-link of the current collection.
     * @returns {string} The collection self-link
     */
    getSelfLink(): string;

    /**
     * Gets the alternate link (ID-based path) of the current collection.
     * @returns {string} The collection alternate link
     */
    getAltLink(): string;

    /**
     * Creates a new document in the collection.
     * @param {string} collectionLink - The self-link of the collection
     * @param {any} document - The document object to create
     * @param {Object} [options] - Optional parameters for the request
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    createDocument(
        collectionLink: string,
        document: any,
        options?: any,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Reads a document from the collection.
     * @param {string} documentLink - The self-link of the document
     * @param {Object} [options] - Optional parameters for the request
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    readDocument(
        documentLink: string,
        options?: any,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Replaces an existing document in the collection.
     * @param {string} documentLink - The self-link of the document to replace
     * @param {any} document - The new document object
     * @param {Object} [options] - Optional parameters for the request (e.g., etag for optimistic concurrency)
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    replaceDocument(
        documentLink: string,
        document: any,
        options?: any,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Deletes a document from the collection.
     * @param {string} documentLink - The self-link of the document to delete
     * @param {Object} [options] - Optional parameters for the request (e.g., etag for optimistic concurrency)
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    deleteDocument(
        documentLink: string,
        options?: any,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Queries documents in the collection.
     * @param {string} collectionLink - The self-link of the collection
     * @param {string | Object} query - SQL query string or query object
     * @param {IQueryOptions} [options] - Query options (continuation, pageSize)
     * @param {CollectionCallback} [callback] - Callback function that receives query results
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    queryDocuments(
        collectionLink: string,
        query: string | any,
        options?: IQueryOptions,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Reads all documents in the collection.
     * @param {string} collectionLink - The self-link of the collection
     * @param {IQueryOptions} [options] - Query options (continuation, pageSize)
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    readDocuments(
        collectionLink: string,
        options?: IQueryOptions,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Creates an attachment for a document.
     * @param {string} documentLink - The self-link of the document
     * @param {any} attachment - The attachment object
     * @param {Object} [options] - Optional parameters for the request
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    createAttachment(
        documentLink: string,
        attachment: any,
        options?: any,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Reads an attachment from a document.
     * @param {string} attachmentLink - The self-link of the attachment
     * @param {Object} [options] - Optional parameters for the request
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    readAttachment(
        attachmentLink: string,
        options?: any,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Replaces an attachment.
     * @param {string} attachmentLink - The self-link of the attachment to replace
     * @param {any} attachment - The new attachment object
     * @param {Object} [options] - Optional parameters for the request
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    replaceAttachment(
        attachmentLink: string,
        attachment: any,
        options?: any,
        callback?: CollectionCallback
    ): boolean;

    /**
     * Deletes an attachment from a document.
     * @param {string} attachmentLink - The self-link of the attachment to delete
     * @param {Object} [options] - Optional parameters for the request
     * @param {CollectionCallback} [callback] - Callback function
     * @returns {boolean} True if the operation was accepted for processing, false otherwise
     */
    deleteAttachment(
        attachmentLink: string,
        options?: any,
        callback?: CollectionCallback
    ): boolean;
}
