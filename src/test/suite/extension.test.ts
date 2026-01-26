import * as assert from 'assert';
import * as vscode from 'vscode';

// import * as myExtension from '../../extension';

suite('Cosmos DB Toolkit Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Cosmos DB Toolkit loads and activates', async () => {
		
		const extensionId = 'wblackmon.cosmosdb-toolkit';

		const extension = vscode.extensions.getExtension(extensionId);
		assert.ok(extension, 'Cosmos DB Toolkit ${extensionId} not found');

		await extension?.activate();
		assert.ok(extension, 'Cosmos DB Toolkit failed to activate');

	});
});
