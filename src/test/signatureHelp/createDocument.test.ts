import * as vscode from "vscode";
import { strict as assert } from "assert";

suite("SignatureHelp – createDocument", () => {
  test("shows signature help and highlights correct parameter", async () => {
    // Create an in-memory document
    const doc = await vscode.workspace.openTextDocument({
      language: "javascript",
      content: `coll.createDocument(`
    });

    const editor = await vscode.window.showTextDocument(doc);

    // Position cursor right after the opening parenthesis
    const position = new vscode.Position(0, "coll.createDocument(".length);
    editor.selection = new vscode.Selection(position, position);

    // Trigger signature help
    const help = await vscode.commands.executeCommand<vscode.SignatureHelp>(
      "vscode.executeSignatureHelpProvider",
      doc.uri,
      position,
      "("
    );

    assert.ok(help, "SignatureHelp should be returned");
    assert.ok(help!.signatures.length > 0, "At least one signature expected");

    const sig = help!.signatures[0];

    assert.equal(
      sig.label.startsWith("createDocument"),
      true,
      "Signature label should start with createDocument"
    );

    // Active signature index
    assert.equal(help!.activeSignature, 0, "Active signature should be index 0");

    // Active parameter index (first parameter)
    assert.equal(help!.activeParameter, 0, "Active parameter should be index 0");
  });

  test("moves to second parameter after first comma", async () => {
    const doc = await vscode.workspace.openTextDocument({
      language: "javascript",
      content: `coll.createDocument("link", `
    });

    const editor = await vscode.window.showTextDocument(doc);

    const position = new vscode.Position(0, `coll.createDocument("link", `.length);
    editor.selection = new vscode.Selection(position, position);

    const help = await vscode.commands.executeCommand<vscode.SignatureHelp>(
      "vscode.executeSignatureHelpProvider",
      doc.uri,
      position,
      ","
    );

    assert.ok(help, "SignatureHelp should be returned");
    assert.equal(help!.activeParameter, 1, "Active parameter should be index 1");
  });
});
