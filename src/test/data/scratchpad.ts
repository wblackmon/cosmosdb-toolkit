// ------------------------------------------------------------
// Cosmos DB Toolkit Scratchpad
// Load this file in the Extension Development Host (F5)
// and explore IntelliSense for the server-side API surface.
// ------------------------------------------------------------

// These globals come from your extension's type definitions.
// Hover over each to see the interface details.

const ctx = getContext();          // IContext
const coll = ctx.getCollection();  // ICollection
const req = ctx.getRequest();      // IRequest
const res = ctx.getResponse();     // IResponse

// The request body (any)
const body = req.getBody();

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
    bodyPreview: body
  };
}

// ------------------------------------------------------------
// Notes:
// - This file is NOT a stored procedure.
// - It is a TypeScript playground for IntelliSense.
// - Use it during F5 debugging to validate your API surface.
// ------------------------------------------------------------
