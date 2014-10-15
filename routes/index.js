var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Hogan App' });    // index.hjs rendered
});

// attempt to do soemthing ... show some json
router.get('/api', function(req, res) {
  res.send({name: 'Dolce', age:4});
});


module.exports = router;


