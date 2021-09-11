var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

const mainController = require(path.resolve(__dirname, "..", "controllers", "mainController"));


module.exports = router;
