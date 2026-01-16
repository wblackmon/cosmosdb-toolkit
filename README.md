# Cosmos DB Stored Procedure IntelliSense

This project provides a lightweight developer experience for authoring Cosmos DB
stored procedures and triggers with real IntelliSense, hover tooltips, and type
definitions. The goal is to make server-side JavaScript development in Cosmos DB
feel as natural as writing modern Node.js code.

## Features

- Global `.d.ts` definitions for Cosmos DB server-side APIs
- Real JSDoc hover tooltips for:
  - getContext()
  - getCollection()
  - getRequest()
  - getResponse()
  - getBody()
- Fully working IntelliSense inside plain JavaScript (no TypeScript required)
- Scratchpad stored procedure for exploring the API surface
- Clean, minimal structure designed for future expansion
- Soft-blocking of unsupported APIs (e.g., `console.log`)

## File Structure

.vscode/
  launch.json           # Debug configuration (optional)

types/
  cosmosdb.d.ts         # Global type definitions for Cosmos DB server-side JS

test/
  test-sp.js            # Scratchpad stored procedure for IntelliSense testing

jsconfig.json           # Ensures VS Code loads .d.ts and enables tooltips
.gitignore              # Repo hygiene
extension.js            # Extension entry point (future use)
package.json            # Project metadata and dependencies
README.md               # Project documentation

## Getting Started

1. Open the project in VS Code.
2. Ensure JavaScript IntelliSense is enabled.
3. Open `test/test-sp.js` and start typing inside the `scratchpad()` function.
4. Hover over any Cosmos DB API (e.g., `getContext`, `getCollection`) to see full tooltips.
5. Explore the API surface by typing:
   - `ctx.`  
   - `coll.`  
   - `req.`  
   - `res.`  

## Goals

This repo is the foundation for a full VS Code extension that will provide:

- IntelliSense for all Cosmos DB server-side APIs
- Snippets for stored procedures, triggers, and UDFs
- Inline diagnostics for unsupported APIs
- Optional runtime validation
- A complete developer enablement toolkit for Cosmos DB server-side JavaScript

## License

MIT
