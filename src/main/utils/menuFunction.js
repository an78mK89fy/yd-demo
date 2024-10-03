const { BrowserWindow } = require('electron')

import { ipcNavigate } from '@/main/utils/ipcMain/ipcMainSend.js'
import { openWindowLock, titleWindowLock } from '@/main/windows.js'

function goLogin() {
    ipcNavigate.push('/')
}

function goRegister() {
    ipcNavigate.push('/register')
}

function goBack() {
    const wc = BrowserWindow.getAllWindows()[0].webContents
    if (wc.navigationHistory.canGoBack()) wc.navigationHistory.goBack()
}

function showWindows() {
    for (let window of BrowserWindow.getAllWindows()) {
        window.show()
    }
}

function lockWindow() {
    openWindowLock()
    for (let window of BrowserWindow.getAllWindows()) {
        if (window.title !== titleWindowLock) {
            window.destroy()
        }
    }
}

export {
    goLogin,
    goRegister,
    goBack,
    showWindows,
    lockWindow,
}