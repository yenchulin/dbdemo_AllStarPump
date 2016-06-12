var express = require('express');
var router = express.Router();
var Module = require('../models/Module');
var Acompany = require('../models/Acompany');
var Bcompany = require('../models/Bcompany');
var async = require('async');

/* GET query page. */
router.get('/', function(req, res, next) {
  if(req.session.member){
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
            },
            bcomList: function(cb) {
                Bcompany.getAll(function(err, bcomList) {

                    if (err) {
                        cb(err);
                    } else {
                        cb(null, bcomList);
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
                    acomList: results.acomList,
                    bcomList: results.bcomList
                });
            }
            // results is now equals to: {one: 1, two: 2}
        });
  } else {
    res.redirect('/');
  }

});

router.post('/', function(req, res, next) {
    var moduleId = req.body.moduleId;
    var moduleQuantity = req.body.moduleQuantity;
    var moduleUsage = req.body.moduleUsage;

    Module.getById(moduleId, function(err, module) {
        if (err) {
            console.log(err);
            next();
        } else {
            res.render('moduleResult', {
                member: req.session.member,
                module: module
            });
        }
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
        if (err) {
            console.log(err);
            next();
        } else {
            res.render('AcomResult', {
                member: req.session.member,
                acomList: acomList
            });
        }
    });
});

router.post('/', function(req, res, next) {
    var BfirmName = req.body.Bname;
    var pumpId = req.body.pumpId;
    var pumpUsage = req.body.pumpUsage;
    var pumpQuantity = req.body.pumpQuantity;
    var pumpCategory = req.body.pumpCategory;
    var pumpType = req.body.pumpType;
    var pumpFlow = req.body.pumpFlow;
    var personIC = req.body.personIC;
    var address = req.body.address;
    var phoneNo = req.body.phoneNo;

    Bcompany.getByName(bcomName, function(err, bcomList) {
        if (err) {
            console.log(err);
            next();
        } else {
            res.render('BcomResult', {
                member: req.session.member,
                bcomList: bcomList
            });
        }
    });
});
module.exports = router;
