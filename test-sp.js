// @ts-check
/// <reference path="cosmosdb.d.ts" />

/**
 * Sample stored procedure demonstrating IntelliSense support for Cosmos DB server-side JavaScript API.
 * This scratchpad file can be used to explore and test stored procedure logic with full type checking.
 */

/**
 * Example stored procedure that creates a document with validation
 * @param {Object} documentToCreate - The document to create
 */
function createDocumentExample(documentToCreate) {
    var context = getContext();
    var collection = context.getCollection();
    var collectionLink = collection.getSelfLink();
    var response = context.getResponse();

    // Validate input
    if (!documentToCreate) {
        throw new Error('Document is required');
    }

    // Create the document
    var accepted = collection.createDocument(
        collectionLink,
        documentToCreate,
        {},
        function (err, createdDoc) {
            if (err) {
                throw new Error('Error creating document: ' + err.message);
            }
            
            // Set the response body
            response.setBody(createdDoc);
        }
    );

    if (!accepted) {
        throw new Error('Document creation was not accepted');
    }
}

/**
 * Example stored procedure that queries documents
 * @param {string} categoryFilter - Category to filter by
 */
function queryDocumentsExample(categoryFilter) {
    var context = getContext();
    var collection = context.getCollection();
    var collectionLink = collection.getSelfLink();
    var response = context.getResponse();
    var results = [];

    // Build parameterized query to prevent SQL injection
    var query = {
        query: 'SELECT * FROM c WHERE c.category = @category',
        parameters: [
            { name: '@category', value: categoryFilter }
        ]
    };

    // Query documents with proper callback handling
    var accepted = collection.queryDocuments(
        collectionLink,
        query,
        { pageSize: 10 },
        function (err, documents, options) {
            if (err) {
                throw new Error('Query failed: ' + err.message);
            }

            results = documents;
            response.setBody({ documents: results, count: results.length });
        }
    );

    if (!accepted) {
        throw new Error('Query was not accepted');
    }
}

/**
 * Example stored procedure that updates a document
 * @param {string} documentId - The ID of the document to update
 * @param {Object} updates - The fields to update
 */
function updateDocumentExample(documentId, updates) {
    var context = getContext();
    var collection = context.getCollection();
    var collectionLink = collection.getSelfLink();
    var response = context.getResponse();

    // First, read the document
    var documentLink = collectionLink + '/docs/' + documentId;
    
    var accepted = collection.readDocument(documentLink, {}, function (err, doc) {
        if (err) {
            throw new Error('Document not found: ' + err.message);
        }

        // Apply updates
        for (var key in updates) {
            doc[key] = updates[key];
        }

        // Replace the document
        collection.replaceDocument(documentLink, doc, {}, function (err, replaced) {
            if (err) {
                throw new Error('Failed to update document: ' + err.message);
            }
            response.setBody(replaced);
        });
    });

    if (!accepted) {
        throw new Error('Read operation was not accepted');
    }
}

/**
 * Example stored procedure that performs bulk operations
 * @param {Array<Object>} documents - Array of documents to create
 */
function bulkCreateExample(documents) {
    var context = getContext();
    var collection = context.getCollection();
    var collectionLink = collection.getSelfLink();
    var response = context.getResponse();
    var createdCount = 0;

    if (!documents || !Array.isArray(documents)) {
        throw new Error('Documents must be an array');
    }

    // Recursive function to create documents one by one
    function createNext(index) {
        if (index >= documents.length) {
            // All done
            response.setBody({ created: createdCount, total: documents.length });
            return;
        }

        var accepted = collection.createDocument(
            collectionLink,
            documents[index],
            {},
            function (err, created) {
                if (err) {
                    throw new Error('Bulk create failed at index ' + index + ': ' + err.message);
                }
                createdCount++;
                createNext(index + 1);
            }
        );

        if (!accepted) {
            response.setBody({ created: createdCount, total: documents.length, message: 'Request limit reached' });
        }
    }

    createNext(0);
}

/**
 * Example stored procedure demonstrating request/response manipulation
 */
function requestResponseExample() {
    var context = getContext();
    var request = context.getRequest();
    var response = context.getResponse();

    // Get input from request body
    var inputDoc = request.getBody();

    // Add metadata
    inputDoc.processedAt = new Date().toISOString();
    inputDoc.version = '1.0';

    // Set custom response headers
    response.setValue('X-Custom-Header', 'ProcessedByStoredProc');

    // Return the enriched document
    response.setBody(inputDoc);
}
