const { app, BrowserWindow } = require('electron');
import createWindow from '@/main/utils/createWindow.js';
import createTray from '@/main/utils/createTray.js';
import optionMenuTray from '@/main/option/optionMenu/optionMenuTray.js'
import optionMenuDockMain from '@/main/option/optionMenu/optionMenuDockMain.js'

if (require('electron-squirrel-startup')) {
  app.quit()
}

app.whenReady().then(() => {
  const mainWindow = createWindow(null, optionMenuDockMain);

  const tray = createTray(optionMenuTray)

  mainWindow.on('close', event => {
    event.preventDefault()
    mainWindow.hide()
  })
}).then(() => {
  app.on('window-all-closed', () => { })
  app.on('before-quit', () => {
    const allWindows = BrowserWindow.getAllWindows()
    for (let window of allWindows) {
      window.destroy()
    }
  })
  app.on('will-quit', () => { })
  app.on('quit', () => { })
})
