// Local production preview used by the browser tests.
const http = require('node:http');
const fs = require('node:fs/promises');
const path = require('node:path');

const build = path.resolve(__dirname, '../build');
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.pdf': 'application/pdf' };

http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (!pathname.startsWith('/portafolio/')) { response.writeHead(404).end(); return; }
    const file = path.resolve(build, pathname.slice('/portafolio/'.length) || 'index.html');
    if (!file.startsWith(build + path.sep)) { response.writeHead(403).end(); return; }
    const content = await fs.readFile(file);
    response.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    response.end(content);
  } catch {
    response.writeHead(404).end();
  }
}).listen(4173, '127.0.0.1');
