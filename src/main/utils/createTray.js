const { nativeImage, Tray, BrowserWindow } = require('electron')
const { join } = require('path')
import createWindow from './createWindow.js'

function createTray(optionMenuTray) {
    const icon = nativeImage.createFromPath(join(__dirname, '/icon/logo.jpg'))
    const tray = new Tray(icon)
    tray.on('double-click', () => {
        const allWindows = BrowserWindow.getAllWindows()
        for (let window of allWindows) {
            window.show()
        }
    })
    if (optionMenuTray) tray.setContextMenu(optionMenuTray)
    return tray
}

export default createTray