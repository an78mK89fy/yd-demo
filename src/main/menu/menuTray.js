const { Menu } = require('electron')

import {
    showWindows,
    lockWindow
} from '@/main/utils/menuFunction.js'

import {
    openWindowSettings,
    openWindowUser
} from '@/main/utils/menuFunction.js'

export default Menu.buildFromTemplate([
    { label: '主界面', click: showWindows },
    { type: 'separator' },
    {
        label: '账户', submenu: [
            { label: '管理', click: openWindowUser },
            { label: '注销' }
        ]
    },
    { type: 'separator' },
    { label: '锁定', click: lockWindow },
    { label: '设置', click: openWindowSettings },
    { type: 'separator' },
    {
        label: '退出', role: 'quit'
    }
])