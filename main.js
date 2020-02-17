const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1600,
    height: 900,
    resizable: true,
    webPreferences: {
      nodeIntegration: true
    }
  });
  // e carregar o index.html do aplicativo.
  win.loadFile("index.html");
}

app.on("ready", createWindow);

