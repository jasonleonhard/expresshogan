// node.js is not a framework (not like rails)
  // there are libraries for that though...
// it is low level and ultimatly C code
  // single threaded server, but nonblocking code (with streams)

// what node.js can do:  
  // websocket/chat server, file upload client (nonblocking), ad server, real-time data apps



                                                // cannot include -g modules, must install locally 1st
                                                  //npm install coffee-script -g      // if module has an executable must use -g
var coffee = require('coffee-script');
                                                  //coffee app.coffee






//if you were to install a module          ie     npm install fs
var fs = require('fs');                         //How we require module fs    ie   fs.js   // if module is not already included must be installed
var http = require('http');                     //How we require module http        

http.createServer(function(request, response) { // REQUEST EVENT (readable stream, writeable stream)
  var newFile = fs.createWriteStream("readme_copy.md");//
  var fileBytes = request.headers['content-length'];   // store content length in fileBytes
  var uploadedBytes = 0;                        // keep track of uploaded Bytes so far

  request.pipe(newFile);                        // pipe read stream to write stream

  request.on('data', function(chunk) {          // listen to data event that gets called every time we get a new chunk from the request
    uploadedBytes += chunk.length;              // increase number of uploaded bytes, get length and add to uploaded bytes
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





/*
 useful cmd ln 
   npm search request


node-toolbox
npm registery

*/