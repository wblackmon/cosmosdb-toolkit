import * as vscode from "vscode";
import { createDocumentSignature } from "../signatures/cosmosSignatures";

export class CosmosSignatureHelpProvider implements vscode.SignatureHelpProvider {
  provideSignatureHelp(
    document: vscode.TextDocument,
    position: vscode.Position
  ): vscode.ProviderResult<vscode.SignatureHelp> {
    const line = document.lineAt(position.line).text;
    const textBeforeCursor = line.substring(0, position.character);

    // Detect createDocument(
    const callMatch = /createDocument\s*\(/.exec(textBeforeCursor);
    if (!callMatch) {
      return null;
    }

    // Extract everything AFTER the opening parenthesis
    const afterParen = textBeforeCursor.slice(callMatch.index + callMatch[0].length);

    // Count commas to determine active parameter
    const commaCount = (afterParen.match(/,/g) || []).length;

    const help = new vscode.SignatureHelp();
    help.signatures = [createDocumentSignature];
    help.activeSignature = 0;
    help.activeParameter = Math.min(
      commaCount,
      createDocumentSignature.parameters.length - 1
    );

    return help;
  }
}
