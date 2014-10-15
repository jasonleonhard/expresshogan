var http = require('http'); //How we require modules

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Sup");
  response.end();
}).listen(8080);
console.log('Listening on port 8080...');