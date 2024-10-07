const { BaseWindow } = require('electron')

export default {
    navigate: {
        push(path) {
            BaseWindow.getFocusedWindow().webContents.send('ipcNavigate:push', path)
        }
    }
}