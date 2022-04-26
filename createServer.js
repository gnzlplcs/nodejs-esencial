// deploy content in Node.js server

const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('<h1>Hello from the server, dude</h1>');

  console.log('A request was made: ' + request.url);
});

server.listen(3000);

console.log('Listening on port 3000');