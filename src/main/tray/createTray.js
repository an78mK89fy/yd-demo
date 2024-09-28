const { nativeImage, Tray } = require('electron')
const { join } = require('path')
import createWindow from './createWindow.js'

function createTray(optionMenuTray) {
    const icon = nativeImage.createFromPath(join(__dirname, '/icon/logo.jpg'))
    const tray = new Tray(icon)
    tray.on('double-click', () => {
        createWindow()
    })
    if (optionMenuTray) tray.setContextMenu(optionMenuTray)
    return tray
}

export default createTray