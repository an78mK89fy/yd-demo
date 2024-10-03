const { app } = require('electron');

import createWindow from "@/main/utils/createWindow.js"
import menuDockLogin from "@/main/menu/menuDock/menuDockLogin.js";
import menuDockMain from '@/main/menu/menuDock/menuDockMain.js'

function openWindowLogin() {
    const window = createWindow({
        height: 500,
        resizable: false,
        title: 'Login',
    }, menuDockLogin)
    window.on('close', () => app.quit())
    return window
}

function openWindowMain() {
    const window = createWindow({
        path: '/main',
        title: '业务系统'
    }, menuDockMain
    ).on('close', function (event) {
        event.preventDefault()
        this.hide()
    })
    return window
}

const titleWindowLock = '已锁定'
function openWindowLock() {
    createWindow({
        resizable: false,
        path: '/lock',
        title: titleWindowLock
    }).on('close', function (event) {
        event.preventDefault()
        this.hide()
    })
}

function openWindowSettings() {
    return createWindow({
        height: 500,
        width: 500,
        modal: true,
        resizable: false,
        path: '/settings',
        title: '设置'
    })
}

function openWindowUser() {
    return createWindow({
        height: 500,
        width: 500,
        modal: true,
        resizable: false,
        path: '/user',
        title: '用户管理'
    })
}

export {
    openWindowLogin,
    openWindowMain,
    openWindowLock,
    titleWindowLock,
    openWindowSettings,
    openWindowUser,
}