var fs = require('fs');                     //How we require modules
var http = require('http');                     //How we require modules

http.createServer(function(request, response) { // REQUEST EVENT (readable stream, writeable stream)
  var newFile = fs.createWriteStream("readme_copy.md");
  request.pipe(newFile);       // pipe read stream to write stream

  request.on('end', function(){
    response.end('uploaded!');
  });
}).listen(8080);


//curl --upload-file readme.md http://localhost:8080

// usually programs use 'blocking'
// node.js is 'non-blocking'
// google chromes -> real-time web


