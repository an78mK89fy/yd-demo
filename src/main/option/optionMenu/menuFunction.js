const { BrowserWindow } = require('electron')
import createWindow from "@/main/utils/createWindow";

function openSettings() {
    const optionWindow = {
        height: 500,
        width: 500,
        parent: BrowserWindow.getFocusedWindow(),
        modal: true
    }
    createWindow(optionWindow)
}

export { openSettings }