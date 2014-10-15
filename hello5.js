var fs = require('fs');            //How we require modules
var http = require('http');        //How we require modules

http.createServer(function(request, response) { // REQUEST EVENT (readable stream, writeable stream)
  var newFile = fs.createWriteStream("readme_copy.md");
  var fileBytes = request.headers['content-length'];   // store content length in fileBytes
  var uploadedBytes = 0; // keep track of uploaded Bytes so far

  request.pipe(newFile);       // pipe read stream to write stream

  request.on('data', function(chunk) {   // listen to data event that gets called every time we get a new chunk from the request
    uploadedBytes += chunk.length;  // increase number of uploaded bytes, get length and add to uploaded bytes
    var progress = (uploadedBytes / fileBytes) * 100; // calc total progress 
    response.write("progress: " + parseInt(progress, 10) + "%\n"); // write progress back to response
  });

  request.on('end', function(){  // listen to end event to know when to end response
    response.end('uploaded!');   // send string back to client
  });
}).listen(8080);                 // Port listening to 8080

//Directions
  // node hello5.js
  // curl --upload-file large_file.jpg http://localhost:8080

// usually programs use 'blocking'
// node.js is 'non-blocking'
// google chromes -> real-time web


