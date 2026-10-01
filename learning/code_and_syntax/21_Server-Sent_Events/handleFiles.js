import path from 'node:path'
import fs from 'node:fs/promises'

const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
}

export async function handleFiles(req, res, baseDir) {
    try {
        const publicDir = path.join(baseDir, 'public')
        const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url)
        const content = await fs.readFile(filePath)
        const ext = path.extname(filePath)
        res.statusCode = 200
        res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
        res.end(content)
    } catch (err) {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end('File not found')
    }
}
