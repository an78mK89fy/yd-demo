const { app, Menu, BaseWindow } = require('electron');

import { openWindowLogin } from '@/main/windows.js';
import { ipcMainOnOpenWindowWork } from '@/main/utils/ipcMain/ipcMainOn.js'

if (require('electron-squirrel-startup')) app.quit()
Menu.setApplicationMenu(null)

app.whenReady().then(() => {
  const windowLogin = openWindowLogin()
  ipcMainOnOpenWindowWork(windowLogin)
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