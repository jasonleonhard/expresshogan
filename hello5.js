var fs = require('fs');                     //How we require modules
var http = require('http');                     //How we require modules

http.createServer(function(request, response) { // REQUEST EVENT (readable stream, writeable stream)
  var newFile = fs.createWriteStream("readme_copy.md");
  var fileBytes = request.headers['content-length'];
  var uploadedBytes = 0;

  request.pipe(newFile);       // pipe read stream to write stream

  request.on('data', function(chunk) {
    uploadedBytes += chunk.length;
    var progress = (uploadedBytes / fileBytes) * 100;
    response.write("progress: " + parseInt(progress, 10) + "%\n");
  });

  request.on('end', function(){
    response.end('uploaded!');
  });
}).listen(8080);

//Directions
  // node hello5.js
  // curl --upload-file large_file.jpg http://localhost:8080

// usually programs use 'blocking'
// node.js is 'non-blocking'
// google chromes -> real-time web


