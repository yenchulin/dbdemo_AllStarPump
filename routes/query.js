var express = require('express');
var router = express.Router();
var Module = require('../models/Module');
var Acompany = require('../models/Acompany');
var async = require('async');

/* GET query page. */
router.get('/', function(req, res, next) {


    async.parallel({
            moduleList: function(cb) {
                Module.getAll(function(err, moduleList) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, moduleList);
                    }
                });
            },
            acomList: function(cb) {
                Acompany.getAll(function(err, acomList) {
                    if (err) {
                        cb(err);
                    } else {
                        cb(null, acomList);
                    }
                });
            }
            
        },
        function(err, results) {
            if (err) {
                console.log(err);
                next();
            } else {
                res.render('query', {
                    member: req.session.member,
                    moduleList: results.moduleList,
                    acomList: results.acomList
                });
            }
            // results is now equals to: {one: 1, two: 2}
        });

});


router.post('/', function(req, res, next) {
    var moduleId = req.body.moduleId;
    var moduleQuantity = req.body.moduleQuantity;
    var currentLocation = req.body.currentLocation;
    var moduleUsage = req.body.moduleUsage;

    Module.getById(moduleId, function(err, moduleList) {
        res.render('moduleResult', {
            member: req.session.member,
            moduleList: moduleList
        });
    });
});



router.post('/', function(req, res, next) {
    var AfirmName = req.body.Aname;
    var componentId = req.body.componentId;
    var componentName = req.body.componentName;
    var Aaddress = req.body.Aaddress;
    var AphoneNo = req.body.AphoneNo;
    var ApersonIC = req.body.Aperson;
    var lendOT = req.body.rentTime;
    var returnT = req.body.returnTime;


    Acompany.getByName(acomName, function(err, acomList) {
        res.render('AcomResult', {
            member: req.session.member,
            acomList: acomList
        });
    });
});



module.exports = router;
