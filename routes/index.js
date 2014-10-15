var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Hogan App Sweet!' });    // index.hjs rendered
});


// EASILY ADD NEW ROUTES BELOW
// Example: show some json
router.get('/dolce', function(req, res) {
  res.send({name: 'Dolce', age:4});
});

router.get('/api', function(req, res) {
  res.render('index', { title: 'Express Hogan App' });    // index.hjs rendered
});

router.get('/home', function(req, res) {
  res.send('home!');
});





module.exports = router;

//require('./user');
