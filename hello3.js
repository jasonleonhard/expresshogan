var fs = require('fs');                     //How we require modules

  var file = fs.createReadStream("readme.md");
  var newFile = fs.createWriteStream("readme_copy.md");
  
  file.pipe(newFile);


//curl --upload-file readme.md http://localhost:8080

// usually programs use 'blocking'
// node.js is 'non-blocking'
// google chromes -> real-time web


