// 依赖
const express = require('express')
const path = require('path')
const http = require('http')

// 模块
import api from './api'

// 代码
const app = express()

app.use(express.static(path.join((
    MAIN_WINDOW_VITE_DEV_SERVER_URL ?
        __dirname :
        process.resourcesPath
), '/static')))

app.use('/api', api)

const server = http.createServer(app)
server.open = function () { this.listen(80) }

export default server