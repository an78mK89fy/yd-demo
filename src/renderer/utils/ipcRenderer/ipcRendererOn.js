function ipcRendererOnRouter(router) {
    ipcNavigate.push(path => router.push(path))
}

export {
    ipcRendererOnRouter
}