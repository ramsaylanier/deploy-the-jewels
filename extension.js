const vscode = require('vscode');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max) + 1);
}

function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.deployTheJewels', function () {
        const term = vscode.window.createTerminal ( 'Terminal' )
        const random = getRandomInt(10)
        term.sendText('npm run deploy', true)
        term.sendText('mpsyt', true)
        term.sendText('/search run the jewels', true)
        term.sendText(`${random}`, true)
        term.show ( true );
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;