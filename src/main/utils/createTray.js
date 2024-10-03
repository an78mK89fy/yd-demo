const { nativeImage, Tray } = require('electron')
const { join } = require('path')

import { showWindows } from '@/main/utils/menuFunction.js'

function createTray(option) {
    const icon = nativeImage.createFromPath(join(__dirname, '/icon/logo.jpg'))
    const tray = new Tray(icon)
    tray.on('double-click', showWindows)
    if (option) tray.setContextMenu(option)
    return tray
}

export default createTray