var express = require('express');
var router = express.Router();
var row = {
    name: "", //名稱
    color: "", //顏色
    size:  //大小

}
router.get('/', function(req, res, next) {
  res.send(row);
});

module.exports = router;
