# Cosmos DB Stored Procedure IntelliSense

This project provides a lightweight developer experience for authoring Cosmos DB stored procedures and triggers with real IntelliSense, rich JSDoc hover tooltips, and accurate type definitions. The goal is to make server-side JavaScript development in Cosmos DB feel as natural as writing modern Node.js code.

## Features

- Global `.d.ts` definitions for Cosmos DB server-side APIs
- Full JSDoc hover tooltips for:
  - `getContext()`
  - `getCollection()`
  - `getRequest()`
  - `getResponse()`
  - `getBody()` (typed via generics)
- IntelliSense inside plain JavaScript (`@ts-check`), no TypeScript required
- Typed request bodies using `IRequest<T>`
- Scratchpad stored procedure for exploring the API surface
- Clean, minimal structure designed for future expansion
- Automatic type injection via VS Code extension contribution

## File Structure

.vscode/
launch.json # Debug configuration (optional)

types/
cosmosdb.d.ts # Global type definitions for Cosmos DB server-side JS

test/
test-sp.js # Scratchpad for IntelliSense testing

jsconfig.json # Enables modern JS + DOM + type acquisition
.gitignore # Repo hygiene
extension.js # Extension activation entry point
package.json # Extension metadata and type contribution
README.md # Project documentation

## Getting Started

1. Open the project in VS Code.
2. Ensure JavaScript IntelliSense is enabled (`@ts-check` is supported automatically).
3. Open `test/test-sp.js` and start typing inside the scratchpad.
4. Hover over any Cosmos DB API (e.g., `getContext`, `getCollection`, `createDocument`) to see full tooltips.
5. Explore the API surface by typing:
   - `ctx.`
   - `coll.`
   - `req.`
   - `res.`
6. To test typed request bodies, edit the `@typedef` in `test-sp.js`.

## Goals

This repo is the foundation for a full VS Code extension that will provide:

- IntelliSense for all Cosmos DB server-side APIs
- Snippets for stored procedures, triggers, and UDFs
- Inline diagnostics for unsupported APIs
- Optional runtime validation
- A complete developer enablement toolkit for Cosmos DB server-side JavaScript

## License

MIT
