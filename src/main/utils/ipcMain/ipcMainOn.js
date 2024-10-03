const { ipcMain } = require('electron')

import { openWindowMain } from '@/main/windows.js'
import createTray from '@/main/utils/createTray.js';
import menuTray from '@/main/menu/menuTray.js'

function ipcMainOnOpenWindowWork(windowLogin) {
    ipcMain.on('ipcWindow:openWindowMain', () => {
        windowLogin.destroy()
        openWindowMain()
        createTray(menuTray)
    })
}

export {
    ipcMainOnOpenWindowWork
}