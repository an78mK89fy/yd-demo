const axios = require('axios').default

const requestServer = axios.create({
    baseURL: 'http://localhost',
    timeout: 3000
})

export default requestServer