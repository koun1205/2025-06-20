const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
    const win = new BrowserWindow({
        width: 300,
        height: 300,
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);