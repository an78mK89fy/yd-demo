const { Menu } = require('electron')

const menuTray = Menu.buildFromTemplate([
    { label: '主界面' },
    { type: 'separator' },
    {
        label: '账户', submenu: [
            { label: '管理' },
            { label: '注销' }
        ]
    },
    { type: 'separator' },
    { label: '锁定' },
    {
        label: '设置', click() {
            console.log('set')
        }
    },
    { type: 'separator' },
    {
        label: '退出', role: 'quit'
    }
])

export default menuTray