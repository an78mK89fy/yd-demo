function ipcRendererOnRouter(router) {
    ipcOnNavigate.push(path => router.push(path))
}

export {
    ipcRendererOnRouter
}