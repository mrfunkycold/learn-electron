const {BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let settingsWindow;
function show() {

    settingsWindow = new BrowserWindow({
            height: 300,
            width: 200,
            resizable: false,
            frame: false
    });

    settingsWindow.loadURL(url.format({
        pathname: path.join(__dirname, '../app/settings.html'),
        protocol: 'file:',
        slashes: true
    }));
    
    settingsWindow.on('closed', () => settingsWindow = null);
}

function close() {
    settingsWindow.close();
}

module.exports = {
    show,
    close
};