const { BrowserWindow, Menu } = require('electron')
const path = require('path');


function createWindow(optionWindow, menu) {
    const optionDefault = {
        width: 800,
        height: 600,
        // resizable: false,
        autoHideMenuBar: !menu,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    }
    
    // 创建窗体
    const window = new BrowserWindow({
        ...optionDefault,
        ...optionWindow
    });

    if (menu) {
        Menu.setApplicationMenu(menu)
    }

    // and load the index.html of the app.
    if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
        console.log(MAIN_WINDOW_VITE_DEV_SERVER_URL)
        window.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
        // Open the DevTools.
        window.webContents.openDevTools();
    } else {
        window.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
    }

    return window
}

export default createWindow