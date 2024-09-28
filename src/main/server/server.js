// 依赖
const express = require('express')
const path = require('path')
const http = require('http')

// 模块
import api from './api'

// 代码
const app = express()

const dir = MAIN_WINDOW_VITE_DEV_SERVER_URL ? __dirname : process.resourcesPath
app.use(express.static(path.join(dir, '/web')))

app.use('/api', api)

app.get('/ok', (req, res) => {
    res.send('ok')
})

export default http.createServer(app)