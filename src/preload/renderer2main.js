const { contextBridge, ipcRenderer } = require('electron')

// renderer => main
export default function () {
    contextBridge.exposeInMainWorld('ipcSendWindow', {
        openWindowMain() {
            ipcRenderer.send('ipcWindow:openWindowMain')
        }
    })
}