const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

// Creating a server.
//Request and Response

const server = http.createServer((req,resp) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type','text/plain')
    resp.end('Server is running');
})

// To start a server - server.listen(portname,localhost)

server.listen(port,hostname, () => {
    console.log(`server has started at http://${hostname}:${port}/`);
})