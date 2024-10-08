const { Menu } = require('electron')

import {
    goLogin,
    goRegister
} from '@/main/utils/menuFunction.js'
import { openWindowSettings } from '@/main/utils/menuFunction.js'

export default Menu.buildFromTemplate([
    { label: '登录', click: goLogin },
    { label: '注册', click: goRegister },
    { label: '|' },
    {
        label: '程序', submenu: [
            { label: '刷新', role: 'reload' },
            { label: '设置', click: openWindowSettings },
            { label: '退出', role: 'quit' }
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