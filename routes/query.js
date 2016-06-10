var express = require('express');
var router = express.Router();
var Module = require('../models/Module');


/* GET query page. */
router.get('/', function(req, res, next) {
    Module.getAll(function(err, moduleList) {
        res.render('query', {
            member: req.session.member,
            moduleList: moduleList
        });
    });
});

router.post('/', function(req, res, next) {
    var moduleId = req.body.moduleId;
    var moduleQuantity = req.body.moduleQuantity;
    console.log(moduleId);

    Module.getById(moduleId, function(err, module) {
        res.render('moduleResult', {
            member: req.session.member,
            module: module
        });
    });
});



module.exports = router;
