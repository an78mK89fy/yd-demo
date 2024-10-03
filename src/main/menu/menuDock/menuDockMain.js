const { Menu } = require('electron')

import { goBack, lockWindow } from '@/main/utils/menuFunction.js'
import { openWindowSettings, openWindowUser } from '@/main/windows.js'

export default Menu.buildFromTemplate([
    { label: '◀返回', click: goBack },
    { label: '刷新', role: 'reload' },
    { label: '|', },
    {
        label: '程序', submenu: [
            { label: '锁定', click: lockWindow },
            { label: '全屏', role: 'togglefullscreen' },
            { label: '设置', click: openWindowSettings },
            { type: 'separator' },
            { label: '退出', role: 'quit' }
        ]
    },
    {
        label: '账户', submenu: [
            { label: '管理', click: openWindowUser },
            { type: 'separator' },
            { label: '注销' },
        ]
    },
    {
        label: '帮助', submenu: [
            { label: '帮助文档' },
            { label: '问题反馈' },
            { label: '更新日志' },
            { label: '开发者工具', role: 'toggledevtools' },
            { label: '关于' },
        ]
    }
])