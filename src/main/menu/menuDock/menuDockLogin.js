const { Menu } = require('electron')

import {
    goLogin,
    goRegister
} from '@/main/utils/menuFunction.js'
import { openWindowSettings } from '@/main/windows.js'

export default Menu.buildFromTemplate([
    { label: '登录', click: goLogin },
    { label: '注册', click: goRegister },
    { label: '|' },
    { label: '设置', click: openWindowSettings },
    { label: '帮助' }
])