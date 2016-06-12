var express = require('express');
var router = express.Router();
var Module = require('../models/Module');

router.post('/',function(res,req,next){
  
  res.render('moduleResult',{
    member: req.session.member
  });
});
module.exports = router;
