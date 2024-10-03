const { contextBridge, ipcRenderer } = require('electron')

// main => renderer
export default function () {
    contextBridge.exposeInMainWorld('ipcNavigate', {
        push(callback) {
            ipcRenderer.on('ipcNavigate:push', (_event, path) => callback(path))
        },

    })
}