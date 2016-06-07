var express = require('express');
var router = express.Router();
var Member = require('../models/Member');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
      member: req.session.member
    });
});

module.exports = router;
