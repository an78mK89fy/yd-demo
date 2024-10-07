const { app, Menu, BaseWindow, dialog } = require('electron');

import server from '@/main/server'
import ipcMainOn from '@/main/utils/ipcMain/ipcMainOn.js'
import { openWindowWellcome, openWindowLogin } from '@/main/windows.js';

if (require('electron-squirrel-startup')) app.quit()
if (!MAIN_WINDOW_VITE_DEV_SERVER_URL) Menu.setApplicationMenu(null)
server.open()
ipcMainOn()

app.whenReady().then(() => {
  const windowWellcome = openWindowWellcome()
  windowWellcome.on('ready-to-show', () => {
    setTimeout(() => {
      windowWellcome.destroy()
      openWindowLogin()
    }, 3000)
  })

}).then(() => {
  app.on('window-all-closed', () => {
    // 监听时，所有窗口关闭不退出app
  })
  app.on('before-quit', e => {
    if (dialog.showMessageBoxSync({
      title: '确认退出',
      type: 'warning',
      message: '是否执行',
      buttons: ['ok', 'cancel'],
      defaultId: 1
    })) {
      e.preventDefault()
    }
    else {
      for (let window of BaseWindow.getAllWindows()) {
        window.destroy()
      }
    }
  })
  app.on('will-quit', () => { })
  app.on('quit', () => { })
})