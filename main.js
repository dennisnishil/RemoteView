const { app, BrowserWindow } = require('electron');

// Allow WebRTC & socket connections across HTTPS cloud endpoints
app.commandLine.appendSwitch('ignore-certificate-errors');
app.commandLine.appendSwitch('allow-insecure-localhost');

// Load compiled background server
require('./dist/viewdesk.js');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "ViewDesk - Remote Support",
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: false // Prevents CORS blocking between local app and Render cloud
    }
  });

  setTimeout(() => {
    win.loadURL('http://localhost:3000');
  }, 1500);
}

app.whenReady().then(createWindow);