const { BrowserWindow } = require('electron')
const { join } = require('path');
const { format } = require('url')

class CreateWindow {
    #callback
    constructor(option, callback = new Function) {
        this.option = option
        this.window
        this.#callback = callback
    }
    open() {
        if (this.option?.title) {
            for (let window of BrowserWindow.getAllWindows()) {
                if (window.getTitle() === this.option.title) {
                    window.show()
                    return window
                }
            }
        }
        const optionDefault = {
            width: 800,
            height: 600,
            show: false,
            webPreferences: {
                preload: join(__dirname, 'preload.js'),
            },
            parent: this.option?.modal ? BrowserWindow.getAllWindows()[0] : null,
            autoHideMenuBar: MAIN_WINDOW_VITE_DEV_SERVER_URL ? !this.option?.menu : false,
        }
        // 创建窗体
        const window = new BrowserWindow({
            ...optionDefault,
            ...this.option,
        })
        if (this.option?.menu) window.setMenu(this.option.menu)

        window.once('ready-to-show', () => {
            if (this.option?.title) window.setTitle(this.option.title)
            this.show()
        })

        // and load the index.html of the app.
        if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
            const _url = new URL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
            _url.hash = this.option?.path ? this.option.path : ''
            console.log(_url.toString())
            window.loadURL(_url.toString())
            // Open the DevTools.
            window.webContents.openDevTools();
        } else {
            window.loadFile(
                join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
                { hash: this.option?.path ? format(this.option.path) : '' }
            )
        }
        this.#callback(window)
        this.window = window
        return window
    }
    close() { this.window?.close() }
    destroy() { this.window?.destroy() }
    hide() { this.window?.hide() }
    show() { this.window?.show() }
}

function createWindow(option) {
    if (option?.title) {
        for (let window of BrowserWindow.getAllWindows()) {
            if (window.getTitle() === option.title) {
                window.show()
                return window
            }
        }
    }
    const optionDefault = {
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            preload: join(__dirname, 'preload.js'),
        },
        parent: option?.modal ? BrowserWindow.getAllWindows()[0] : null,
        autoHideMenuBar: MAIN_WINDOW_VITE_DEV_SERVER_URL ? !option?.menu : false,
    }
    // 创建窗体
    const window = new BrowserWindow({
        ...optionDefault,
        ...option,
    })
    if (option?.menu) window.setMenu(option.menu)

    window.once('ready-to-show', function () {
        if (option?.title) window.setTitle(option.title)
        this.show()
    })

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        const _url = new URL(MAIN_WINDOW_VITE_DEV_SERVER_URL)
        _url.hash = option?.path ? option.path : ''
        console.log(_url.toString())
        window.loadURL(_url.toString())
        // Open the DevTools.
        window.webContents.openDevTools();
    } else {
        window.loadFile(
            join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`),
            { hash: option?.path ? format(option.path) : '' }
        )
    }

    return window
}

export default createWindow
export { CreateWindow }