const express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Lesson Ten Project' });
});

module.exports = router;
