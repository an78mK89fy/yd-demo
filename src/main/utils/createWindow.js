const { BrowserWindow } = require('electron')
const { join } = require('path');
const { format } = require('url')

function createWindow(option, menu) {
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
    }
    // 创建窗体
    const window = new BrowserWindow({
        ...optionDefault,
        ...option
    })
    if (menu) window.setMenu(menu)

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