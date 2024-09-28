// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

// import server from './preload/preloadServer.js'

// contextBridge.exposeInMainWorld('server', server)