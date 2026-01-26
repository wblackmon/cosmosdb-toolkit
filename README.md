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

### **Signature Help for Server‑Side Operations**

The toolkit now includes rich Signature Help for Cosmos DB server‑side APIs.

Typing inside a stored procedure, trigger, UDF, or the included scratchpad displays:

- function signatures  
- parameter lists  
- active parameter highlighting  
- optional parameter hints  
- callback signatures  

#### **Currently Supported**

- `createDocument` — full Signature Help with active parameter tracking  
  (additional methods will be added incrementally)

#### Example

```js
coll.createDocument(
```

Automatically opens Signature Help showing:

```md
createDocument(collectionLink: string, body: any, options?: any, callback?: CosmosCallback<any>)
```

As you type arguments and commas, the active parameter updates in real time.

This behavior is fully validated by automated tests.

---

### **Snippets for Stored Procedures, Triggers, and UDFs**

Quickly scaffold:

- Stored procedure templates  
- Pre‑trigger and post‑trigger templates  
- UDF boilerplate  
- Callback patterns  
- Continuation‑token query loops  

---

### **Scratchpad for IntelliSense Testing**

A dedicated `scratchpad.ts` file is included for validating:

- Global API definitions  
- Completion provider behavior  
- Signature Help  
- Hover tooltips  
- Optional parameter signatures  

Launch the Extension Development Host with **F5**, open the scratchpad, and begin typing:

```ts
coll.createDocument(
```

to validate the behavior.

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
```

---

## Testing

The extension includes automated tests for:

- extension activation  
- Signature Help behavior for `createDocument`  
- correct active parameter selection  
- trigger characters `(` and `,`  
- deterministic behavior in both JavaScript and TypeScript documents  

Run the full suite with:

```md
npm test
```

---

## License

MIT
