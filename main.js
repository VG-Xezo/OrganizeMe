const { app, BrowserWindow, shell } = require('electron')

function createWindow () {
  
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "assets/icon.png",
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('src/index.html')
  win.webContents.on('new-window', function(e, url) {
  if('file://' === url.substr(0, 'file://'.length)) {
    return;
  }
  e.preventDefault();
  shell.openExternal(url);
});
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})