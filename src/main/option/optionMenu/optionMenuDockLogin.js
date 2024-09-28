const { Menu } = require('electron')

const menuLoginDock = Menu.buildFromTemplate([
    { label: '程序' },
    { label: '操作' },
    { label: '窗体' },
    { label: '账户' },
    { label: '帮助' }
])

export default menuLoginDock