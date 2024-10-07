function ipcRendererOnRouter(router) {
    ipcRendererOn.navigate.push(path => router.push(path))
}

export {
    ipcRendererOnRouter
}