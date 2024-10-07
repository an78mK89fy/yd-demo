const { app, BaseWindow } = require('electron');

import createWindow from "@/main/utils/createWindow.js"
import menuDockLogin from "@/main/menu/menuDock/menuDockLogin.js";
import menuDockMain from '@/main/menu/menuDock/menuDockMain.js'

function openWindowWellcome() {
    const window = createWindow({
        height: 100,
        width: 300,
        frame: false,
        path: '/wellcome',
        title: 'Luanch'
    })
    window.on('close', e => {
        e.preventDefault()
        app.quit()
    })
    return window
}

function openWindowLogin() {
    const window = createWindow({
        height: 500,
        resizable: false,
        title: 'Login',
        menu: menuDockLogin
    })
    window.on('close', e => {
        e.preventDefault()
        app.quit()
    })
    return window
}

function openWindowMain() {
    const window = createWindow({
        path: '/main',
        menu: menuDockMain
    }
    ).on('close', function (event) {
        event.preventDefault()
        this.hide()
    })
    return window
}

function openWindowLock() {
    const window = createWindow({
        resizable: false,
        path: '/lock',
        title: '已锁定'
    })
    window.on('close', function (event) {
        event.preventDefault()
        this.hide()
    })
    window.unlock = function () {
        for (let window of BaseWindow.getAllWindows()) {
            if (window.title !== menuDockMain().getTitle()) {
                window.destroy()
            }
        }
    }
    return window
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
    openWindowWellcome,
    openWindowLogin,
    openWindowMain,
    openWindowLock,
    openWindowSettings,
    openWindowUser,
}