const { Menu, BrowserWindow, } = require('electron')
import { openSettings } from './menuFunction'

const menu = [
    {
        label: '◀返回', click() {
            const wc = BrowserWindow.getFocusedWindow().webContents
            if (wc.canGoBack()) {
                wc.goBack()
            }
        }
    },
    { label: '刷新', role: 'reload' },
    { label: '|', },
    {
        label: '程序', submenu: [
            { label: '锁定' },
            { label: '全屏', role: 'togglefullscreen' },
            { label: '设置', click: openSettings },
            { type: 'separator' },
            { label: '退出', role: 'quit' }
        ]
    },
    {
        label: '账户', submenu: [
            { label: '管理' },
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
]
const menuMainDock = Menu.buildFromTemplate(menu)

export default menuMainDock