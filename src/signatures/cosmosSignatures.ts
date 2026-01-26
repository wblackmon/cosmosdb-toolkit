import * as vscode from "vscode";

export const createDocumentSignature: vscode.SignatureInformation = (() => {
  const signature = new vscode.SignatureInformation(
    "createDocument(collectionLink: string, body: any, options?: any, callback?: (err: any, document: any) => void)",
    "Creates a new document in the collection."
  );

  signature.parameters = [
    new vscode.ParameterInformation(
      "collectionLink: string",
      "The self-link of the collection."
    ),
    new vscode.ParameterInformation(
      "body: any",
      "The document to create."
    ),
    new vscode.ParameterInformation(
      "options?: any",
      "Optional request options."
    ),
    new vscode.ParameterInformation(
      "callback?: (err: any, document: any) => void",
      "Optional callback invoked with the created document."
    )
  ];

  return signature;
})();
