const { app, Menu, BaseWindow } = require('electron');

import server from '@/main/server'
import { openWindowLogin } from '@/main/windows.js';
import { ipcOnOpenWindowMain } from '@/main/utils/ipcMain/ipcMainOn.js'

if (require('electron-squirrel-startup')) app.quit()
Menu.setApplicationMenu(null)
server.open()

app.whenReady().then(() => {
  const windowLogin = openWindowLogin()
  ipcOnOpenWindowMain(windowLogin)
}).then(() => {
  app.on('window-all-closed', () => { })
  app.on('before-quit', () => {
    for (let window of BaseWindow.getAllWindows()) {
      window.destroy()
    }
  })
  app.on('will-quit', () => { })
  app.on('quit', () => { })
})