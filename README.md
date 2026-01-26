# Cosmos DB Toolkit

The **Cosmos DB Toolkit** provides IntelliSense, snippets, and authoring support for Cosmos DB server‑side JavaScript — including stored procedures, triggers, and user‑defined functions (UDFs). It delivers a clean, friction‑free workflow for writing and maintaining Cosmos DB logic inside Visual Studio Code.

---

## Features

### **Authoritative Type Definitions for Cosmos DB Server‑Side APIs**

Accurate, modern IntelliSense for all server‑side operations:

- `getContext()`, `getCollection()`
- Request/response objects
- CRUD operations (`createDocument`, `readDocument`, `replaceDocument`, `deleteDocument`)
- Query operations (`queryDocuments`, `queryStoredProcedures`)
- Stored procedure execution (`executeStoredProcedure`)
- Fully documented with JSDoc for premium hover tooltips
- Optional parameters for ergonomic developer experience

### **Snippets for Stored Procedures, Triggers, and UDFs**

Quickly scaffold:

- Stored procedure templates  
- Pre‑trigger and post‑trigger templates  
- UDF boilerplate  
- Callback patterns  
- Continuation‑token query loops  

### **Scratchpad for IntelliSense Testing**

A dedicated `scratchpad.ts` file is included for validating:

- Global API definitions  
- Completion provider behavior  
- Hover tooltips  
- Optional parameter signatures  

Ideal for extension development and debugging.

### **Lightweight and Zero‑Configuration**

Works automatically in any `.js` or `.ts` file containing Cosmos DB server‑side code.

---

## Development Workflow

### **Extension Development Host Setup**

To ensure clean IntelliSense during development:

1. Launch the Extension Development Host with **F5**  
2. In that window, create `.vscode/settings.json`  
3. Disable Copilot completions for a pure IntelliSense environment:

```jsonc
{
  "github.copilot.enable": {
    "*": false
  }
}
