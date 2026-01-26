// ------------------------------------------------------------
// Cosmos DB Toolkit Scratchpad
// Load this file in the Extension Development Host (F5)
// and explore IntelliSense for the server-side API surface.
// ------------------------------------------------------------

// These globals come from your extension's type definitions.
// Hover over each to see the interface details.

const ctx = getContext(); // IContext
const coll = ctx.getCollection(); // ICollection
const req = ctx.getRequest(); // IRequest
const res = ctx.getResponse(); // IResponse

// The request body (any)
const body = req.getBody();

// ------------------------------------------------------------
// Typed callback example using your reusable typedef
// ------------------------------------------------------------

/** @type {CosmosCallback<any>} */
const onCreated = (err: any, _doc: any) => {
  if (err) {
    throw err;
  }

  // `_doc` intentionally unused to avoid TS/ESLint warnings
};

// Example document body for testing
const exampleBody = {
  example: true,
  timestamp: Date.now(),
};

// Example collection link
const exampleLink = "dbs/mydb/colls/mycoll";

// ------------------------------------------------------------
// What to type here to test Signature Help + IntelliSense
// ------------------------------------------------------------
//
// 1. Type this and watch Signature Help appear:
//      coll.createDocument(
//
// 2. Then type the first argument:
//      coll.createDocument(exampleLink,
//
// 3. Then the second:
//      coll.createDocument(exampleLink, exampleBody,
//
// 4. Then start typing the callback:
//      coll.createDocument(exampleLink, exampleBody, (err, doc) =>
//
// 5. Finish the callback body:
//      coll.createDocument(exampleLink, exampleBody, (err, doc) => {
//        if (err) throw err;
//      });
//
// 6. Or use the typed callback defined above:
//      coll.createDocument(exampleLink, exampleBody, onCreated);
// ------------------------------------------------------------

// Test call using the reusable callback
coll.createDocument(exampleLink, exampleBody, onCreated);

// ------------------------------------------------------------
// Try typing below — explore IntelliSense from a clean baseline
// ------------------------------------------------------------

// Try typing: ctx.
// ctx.

// Try typing: coll.
// coll.

// Try typing: req.
// req.

// Try typing: res.
// res.

// Try typing: body.
// body;

// ------------------------------------------------------------
// Example: simple debug object to inspect values
// ------------------------------------------------------------

export function scratchpad() {
  return {
    contextType: typeof ctx,
    collectionType: typeof coll,
    requestType: typeof req,
    responseType: typeof res,
    bodyPreview: body,
  };
}

// ------------------------------------------------------------
// Notes:
// - This file is NOT a stored procedure.
// - It is a TypeScript playground for IntelliSense.
// - Use it during F5 debugging to validate your API surface.
// - Add more tests as you expand your API surface:
//     coll.readDocument(...)
//     coll.replaceDocument(...)
//     coll.deleteDocument(...)
//     coll.queryDocuments(...)
//     coll.executeStoredProcedure(...)
// ------------------------------------------------------------
