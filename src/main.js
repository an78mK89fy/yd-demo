const { app, Menu, BaseWindow } = require('electron');

import { openWindowLogin } from '@/main/windows.js';
import { ipcOnOpenWindowWork } from '@/main/utils/ipcMain/ipcMainOn.js'

if (require('electron-squirrel-startup')) app.quit()
Menu.setApplicationMenu(null)

app.whenReady().then(() => {
  const windowLogin = openWindowLogin()
  ipcOnOpenWindowWork(windowLogin)
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