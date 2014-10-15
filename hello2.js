var http = require('http');                     //How we require modules

http.createServer(function(request, response) { // REQUEST EVENT (readable stream, writeable stream)
  response.writeHead(200);
  request.pipe(response);       // pipe read stream to write stream
}).listen(8080);


// node hello1.js
// or 
// curl http://localhost:8080


// usually programs use 'blocking'
// node.js is 'non-blocking'
// google chromes -> real-time web


