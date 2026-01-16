// @ts-check

function scratchpad() {
  const ctx = getContext();          // IContext
  const coll = ctx.getCollection();  // ICollection
  const req = ctx.getRequest();      // IRequest
  const res = ctx.getResponse();     // IResponse

  const body = req.getBody();        // any

  // ---------------------------------------------------
  // Type here — explore IntelliSense from a clean baseline
  // ---------------------------------------------------

  // ctx.
  // coll.
  // req.
  // res.
  // body.

  return {
    contextType: typeof ctx,
    collectionType: typeof coll,
    requestType: typeof req,
    responseType: typeof res,
    bodyPreview: body
  };
}
