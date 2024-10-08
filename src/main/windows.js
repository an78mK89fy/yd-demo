const { app } = require('electron');

import { CreateWindow } from "@/main/utils/CreateWindow.js"
import menuDockLogin from "@/main/menu/menuDock/menuDockLogin.js";
import menuDockMain from '@/main/menu/menuDock/menuDockMain.js'

const windowWellcome = new CreateWindow({
    height: 100,
    width: 300,
    frame: false,
    path: '/wellcome',
    title: 'Luanch'
}, window => {
    window.on('close', e => {
        e.preventDefault()
        app.quit()
    })
})

const windowLogin = new CreateWindow({
    height: 500,
    resizable: false,
    title: 'Login',
    menu: menuDockLogin
}, window => {
    window.on('close', e => {
        e.preventDefault()
        app.quit()
    })
})

const windowMain = new CreateWindow({
    path: '/main',
    title: '业务系统',
    menu: menuDockMain
}, window => {
    window.on('close', function (event) {
        event.preventDefault()
        this.hide()
    })
})

const windowLock = new CreateWindow({
    resizable: false,
    path: '/lock',
    title: '已锁定'
}, window => {
    window.on('close', function (event) {
        event.preventDefault()
        this.hide()
    })
})

const windowSettings = new CreateWindow({
    height: 500,
    width: 500,
    modal: true,
    resizable: false,
    path: '/settings',
    title: '设置'
}
)

const windowUser = new CreateWindow({
    height: 500,
    width: 500,
    modal: true,
    resizable: false,
    path: '/user',
    title: '用户管理'
})

export {
    windowWellcome,
    windowLogin,
    windowMain,
    windowLock,
    windowSettings,
    windowUser,
}