const { BaseWindow } = require('electron')

import ipcMainSend from '@/main/utils/ipcMain/ipcMainSend.js'
import {
    windowLock,
    windowSettings,
    windowUser
} from '@/main/windows.js'

function goLogin() {
    ipcMainSend.navigate.push('/')
}

function goRegister() {
    ipcMainSend.navigate.push('/register')
}

function goBack() {
    const window = BaseWindow.getAllWindows()[0]
    const title = window.getTitle()
    const wc = window.webContents
    if (wc.navigationHistory.canGoBack()) {
        wc.navigationHistory.goBack()
        wc.on('page-title-updated', () => {
            window.setTitle(title)
        })
    }
}

function showWindows() {
    for (let window of BaseWindow.getAllWindows()) {
        window.show()
    }
}

function lockWindow() {
    windowLock.open()
    for (let window of BaseWindow.getAllWindows()) {
        if (window.title !== windowLock.window.getTitle()) {
            window.destroy()
        }
    }
}

function openWindowSettings() {
    windowSettings.open()
}

function openWindowUser() {
    windowUser.open()
}

export {
    goLogin,
    goRegister,
    goBack,
    showWindows,
    lockWindow,
    openWindowSettings,
    openWindowUser
}