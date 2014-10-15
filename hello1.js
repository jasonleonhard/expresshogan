var http = require('http');                     //How we require modules

http.createServer(function(request, response) { // REQUEST EVENT (readable stream, writeable stream)
  response.writeHead(200);
  response.write("Dog running..");
  setTimeout(function () {
    response.write("Dog Done.");
    response.end();  
  }, 15000);                                    // wait 15 sec
}).listen(8080);


// node hello1.js
// or 
// curl http://localhost:8080


// usually programs use 'blocking'
// node.js is 'non-blocking'
// google chromes -> real-time web


