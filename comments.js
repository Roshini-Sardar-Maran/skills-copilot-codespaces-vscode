// Create web server
// Create a web server that listens on port 3000.
// When you navigate to http://localhost:3000, the server should respond with "Hello, World!".
// When you navigate to http://localhost:3000/about, the server should respond with "About Us".

var http = require('http');
var url = require('url');

http.createServer(function(req, res) {
  var path = url.parse(req.url).pathname;

  if (path === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('About Us');
  } else {
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Hello, World!');
  }
}).listen(3000);

console.log('Server running on http://localhost:3000');