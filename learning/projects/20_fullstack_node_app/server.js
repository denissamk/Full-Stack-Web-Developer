import http from 'node:http'
import {serveStatic} from './utils/serveStatic.js'
import {getData} from './utils/getData.js'

const __dirname = import.meta.dirname
// const absPathToResource = path.join(__dirname, 'public', 'index.html', '\n')
// const relPathToResource = path.join('public', 'index.html')

const server = http.createServer(async (req, res) => {
    await serveStatic(req, res, __dirname)
}).listen(8000)