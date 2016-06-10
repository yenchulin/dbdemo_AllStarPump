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
    var moduleID = req.body.moduleID;
    var moduleQuantity = req.body.moduleQuantity;
    var currentLocation = req.body.currentLocation;
    var moduleUsage = req.body.moduleUsage;


    Module.getByID(moduleID, function(err, moduleList) {
        res.render('moduleResult', {
            member: req.session.member,
            moduleList: moduleList,
            moduleID: moduleID
        });
    });
});



module.exports = router;
