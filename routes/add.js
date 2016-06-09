var express = require('express');
var router = express.Router();
var Member = require('../models/Member');
var Module = require('../models/Module');
var Acompany = require('../models/Acompany');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.member) {
        res.render('add', {
            member: req.session.member,
            statusM: null,
            statusA: null
        });
    } else {
        res.redirect('/');
    }
});

router.post('/module', function(req, res, next) {
    if (req.session.member) {
        var moduleId = req.body.moduleId;
        var moduleUsage = req.body.moduleUsage;
        var moduleQuantity = req.body.moduleQuantity;
        var currentLocation = req.body.currentLocation;

        Module.getById(moduleId, function(err, module) {
            if (err) {
                if (err.name == "NotFoundError") {
                    var newModule = new Module({
                        moduleId: moduleId,
                        moduleUsage: moduleUsage,
                        moduleQuantity: moduleQuantity,
                        currentLocation: currentLocation
                    });
                    newModule.insert(function(err) {
                        if (err) {
                            next(err);
                        } else {
                            res.render('add', {
                                member: req.session.member,
                                statusM: '資料已新增!',
                                statusA: null
                            });
                        }
                    });
                } else {
                    console.log(err.name);
                    next();
                }
            } else {
                res.render('add', {
                    member: req.session.member,
                    statusM: '您輸入的資料有誤!',
                    statusA: null
                });
            }
        });
    } else {
        res.redirect('/');
    }
});

router.post('/acom', function(req, res, next) {
    if (req.session.member) {
        var firmName = req.body.firmName;
        var componentID = req.body.componentID;
        var componentName = req.body.componentName;
        var componentQuantity = req.body.componentQuantity;
        var address = req.body.address;
        var phoneNo = req.body.phoneNo;
        var personIC = req.body.personIC;
        var lendOT = req.body.lendOT;
        var returnT = req.body.returnT;
        console.log(firmName);

        Acompany.getByName(firmName, function(err, acom) {
            console.log("acom");
            if (err) {
                if (err.name == "NotFoundError") {
                    var newAcompany = new Acompany({
                        firmName: firmName,
                        componentID: componentID,
                        componentName: componentName,
                        componentQuantity: componentQuantity,
                        address: address,
                        phoneNo: phoneNo,
                        personIC: personIC,
                        lendOT: lendOT,
                        returnT: returnT
                    });
                    newAcompany.insert(function(err) {
                        if (err) {
                            console.log("ttt");
                            next(err);
                        } else {
                            console.log("vvv");
                            res.render('add', {
                                member: req.session.member,
                                statusM: null,
                                statusA: '資料已新增!'
                            });
                        }
                    });
                } else {
                    console.log(err.name + " d");
                    next();
                }
            } else {
                console.log("no err");
                res.render('add', {
                    member: req.session.member,
                    statusM: null,
                    statusA: '您輸入的資料有誤!'
                });
            }
        });
    } else {
        res.redirect('/');
    }
});
module.exports = router;
