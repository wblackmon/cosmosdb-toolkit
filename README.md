# Cosmos DB Toolkit

The **Cosmos DB Toolkit** provides IntelliSense, snippets, and authoring support for Cosmos DB server‑side JavaScript — including stored procedures, triggers, and user‑defined functions (UDFs). It delivers a clean, friction‑free workflow for writing and maintaining Cosmos DB logic inside Visual Studio Code.

---

## Features

- **Type Definitions for Cosmos DB Server‑Side APIs**  
  Automatic IntelliSense for:
  - `getContext()`
  - `getCollection()`
  - Request/response objects
  - Collection operations (`createDocument`, `readDocument`, `queryDocuments`, etc.)

- **Snippets for Stored Procedures, Triggers, and UDFs**  
  Quickly scaffold:
  - Stored procedure templates  
  - Pre‑trigger and post‑trigger templates  
  - UDF boilerplate  
  - Callback patterns and continuation‑token loops  

- **Lightweight and Zero‑Configuration**  
  Works automatically in any `.js` file containing Cosmos DB server‑side code.

> Screenshots and examples will be added as features are finalized.

---

## Requirements

No external dependencies.  
The extension works out‑of‑the‑box with:

- JavaScript (`.js`) files  
- Any Cosmos DB development workflow  
- Any VS Code workspace  

---

## Extension Settings

This version does not contribute user‑configurable settings.

Future versions may include:

- Snippet toggles  
- Strict/relaxed IntelliSense modes  
- Template selection options  

---

## Known Issues

- TypeScript execution of server‑side code still requires manual transpilation to JavaScript  
- Additional snippets and scaffolding commands are planned  
- Inline diagnostics are not yet implemented  

Please report issues or feature requests in the repository.

---

## Release Notes

### 0.0.1

- Initial scaffold  
- Adds test runner  
- Prepares extension structure for IntelliSense and snippet contributions  

---

## Following Extension Guidelines

This extension follows the official VS Code extension authoring guidelines:  
<https://code.visualstudio.com/api/references/extension-guidelines>

---

## Working with Markdown

VS Code includes excellent Markdown authoring tools:

- Split editor: `Ctrl+\`  
- Toggle preview: `Ctrl+Shift+V`  
- Trigger suggestions: `Ctrl+Space`  

---

## Additional Resources

- Cosmos DB Server‑Side Programming Docs  
- VS Code Markdown Support  
- Markdown Syntax Reference
