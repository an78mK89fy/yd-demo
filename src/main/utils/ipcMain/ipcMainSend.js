const { BrowserWindow } = require('electron')

const ipcNavigate = {
    push(path) {
        BrowserWindow.getFocusedWindow().webContents.send('ipcNavigate:push', path)
    }
}

export {
    ipcNavigate
}