import http from 'node:http'
import { serveStatic } from './utils/serveStatic.js'
import { handleGet } from './handlers/routeHandlers.js'
import { handlePost } from './handlers/routeHandlers.js'
// import { getData } from './utils/getData.js'


const __dirname = import.meta.dirname
// const absPathToResource = path.join(__dirname, 'public', 'index.html', '\n')
// const relPathToResource = path.join('public', 'index.html')

const server = http.createServer(async (req, res) => {
    if (req.url === '/api') {
        if (req.method === 'GET') {
        return await handleGet(res)
        } else if (req.method === 'POST') {
        handlePost(req, res) }
    } else if (!req.url.startsWith('/api')) {
        return await serveStatic(req, res, __dirname)
    }
}).listen(8000)

// const data = await getData()
// console.log(typeof data[5].text)