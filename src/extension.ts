import * as vscode from "vscode";
import { CosmosSignatureHelpProvider } from "./providers/signatureHelpProvider";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "cosmosdb-toolkit" is now active!');

  const disposable = vscode.commands.registerCommand(
    "cosmosdb-toolkit.openScratchpad",
    () => vscode.window.showInformationMessage("Cosmos DB Scratchpad opened.")
  );

  context.subscriptions.push(disposable);

  const selector: vscode.DocumentSelector = [
    { language: "javascript", scheme: "file" },
    { language: "javascript", scheme: "untitled" },
    { language: "typescript", scheme: "file" },
    { language: "typescript", scheme: "untitled" }
  ];

  const signatureProvider = vscode.languages.registerSignatureHelpProvider(
    selector,
    new CosmosSignatureHelpProvider(),
    "(", ","
  );

  context.subscriptions.push(signatureProvider);
}

export function deactivate() {}
