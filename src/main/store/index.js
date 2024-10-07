const Store = require('electron-store')

import { defaults } from '@/main/store/defaults.js'

const configSettings = new Store({
    cwd: 'config',
    name: 'settings',
    defaults: defaults.settings,
})

const storePin = new Store({
    cwd: 'config',
    name: 'pin'
})

export {
    configSettings,
    storePin
}