// @ts-check

/**
 * Example typed request body for IntelliSense.
 * Change this shape to test different scenarios.
 * @typedef {{ id: string, value: number }} DemoBody
 */

/** @type {IRequest<DemoBody>} */
const req = getContext().getRequest();

const ctx = getContext();
const coll = ctx.getCollection();
const res = ctx.getResponse();

const body = req.getBody();
body; // IntelliSense now works on `body.`

const op = req.getOperationType();
const trig = req.getTriggerType();

const acceptedCreate = coll.createDocument(
  coll.getSelfLink(),
  { id: "demo", value: 123 },
  {},
  (err, doc, opts) => {}
);

const acceptedQuery = coll.queryDocuments(
  coll.getSelfLink(),
  "SELECT * FROM c",
  { pageSize: 10 },
  (err, results, opts) => {}
);

res.setBody({ ok: true, op, trig, acceptedCreate, acceptedQuery });
