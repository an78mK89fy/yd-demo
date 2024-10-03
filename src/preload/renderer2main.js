const { contextBridge, ipcRenderer } = require('electron')

// renderer => main
export default function () {
    contextBridge.exposeInMainWorld('ipcWindow', {
        ipcRendererSendOpenWindowMain() {
            ipcRenderer.send('ipcWindow:openWindowMain')
        }
    })
}