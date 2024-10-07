const { contextBridge, ipcRenderer } = require('electron')

// renderer => main
export default function () {
    contextBridge.exposeInMainWorld('ipcRendererSend', {
        window: {
            openWindowMain() {
                ipcRenderer.send('ipcWindow:openWindowMain')
            },
            unlock() {
                ipcRenderer.send('ipcWindow:unlock')
            }
        }
    })
}