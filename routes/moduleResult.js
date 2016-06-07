var express = require('express');
var router = express.Router();
var module = require('../models/Module');

var row = {moduleId:"Module.moduleId ",
           moduleUsage:"Module.moduleUsage",
           moduleQuantity:"Module.moduleQuantity",
           currentLocation:"Module.currentLocation" };

router.get('/', function(req, res, next) {
  res.send(row);
});

module.exports = router;
