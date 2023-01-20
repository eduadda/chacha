var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/lala', function(req, res, next) {
  res.send("ayush ddgfhhujh")
});

module.exports = router;
