// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { ipcRenderer } = require('electron')
import main2renderer from '@/preload/main2renderer.js'
import renderer2main from '@/preload/renderer2main'

// global
// window.addEventListener('DOMContentLoaded', () => {
//     ipcRenderer.on()
// })

// main => renderer
main2renderer()

// renderer => main
renderer2main()