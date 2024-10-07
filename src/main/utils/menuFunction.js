const { BaseWindow } = require('electron')

import ipcMainSend from '@/main/utils/ipcMain/ipcMainSend.js'
import { openWindowLock } from '@/main/windows.js'

function goLogin() {
    ipcMainSend.navigate.push('/')
}

function goRegister() {
    ipcMainSend.navigate.push('/register')
}

function goBack() {
    const wc = BaseWindow.getAllWindows()[0].webContents
    if (wc.navigationHistory.canGoBack()) wc.navigationHistory.goBack()
}

function showWindows() {
    for (let window of BaseWindow.getAllWindows()) {
        window.show()
    }
}

function lockWindow() {
    for (let window of BaseWindow.getAllWindows()) {
        if (window.title !== openWindowLock().getTitle()) {
            window.destroy()
        }
    }
}

export {
    goLogin,
    goRegister,
    goBack,
    showWindows,
    lockWindow
}