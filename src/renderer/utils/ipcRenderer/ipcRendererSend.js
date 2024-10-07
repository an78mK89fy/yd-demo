function unlockWindow() {
    ipcRendererSend.window.unlock()
}

export {
    unlockWindow
}