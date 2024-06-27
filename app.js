const http = require('http');
const fs = require('fs');
const string = require('./string.js');

const server = http.createServer((req, res) => {
  console.log('유효성 검사:', req.url);
  if (req.url === '/' && req.method === 'GET') {
    fs.writeFileSync('./random.html', string.main, 'utf-8');
    let data = fs.readFileSync('./random.html', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  }
  if (req.url === '/lunch.js' && req.method === 'GET') {
    let data = fs.readFileSync('./lunch.js', 'utf-8');

    res.writeHead(200, { 'Content-Type': 'application/javascript; charset=utf-8' });
    res.end(data);
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
