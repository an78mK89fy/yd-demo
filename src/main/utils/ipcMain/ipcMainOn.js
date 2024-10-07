const { ipcMain, BrowserWindow } = require('electron')

import { openWindowMain } from '@/main/windows.js'
import createTray from '@/main/utils/createTray.js';
import menuTray from '@/main/menu/menuTray.js'

export default function () {
    ipcMain.on('ipcWindow:openWindowMain', e => {
        BrowserWindow.fromWebContents(e.sender).destroy()
        openWindowMain()
        createTray(menuTray)
    })
    ipcMain.on('ipcWindow:unlock', e => {
        BrowserWindow.fromWebContents(e.sender).destroy()
        openWindowMain()
    })
}