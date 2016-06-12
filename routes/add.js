var express = require('express');
var router = express.Router();
var Member = require('../models/Member');
var Module = require('../models/Module');
var Acompany = require('../models/Acompany');
var Bcompany = require('../models/Bcompany');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.member) {
        res.render('add', {
            member: req.session.member,
            statusM: null,
            statusA: null,
            statusB: null
        });
    } else {
        res.redirect('/');
    }
});

router.post('/module', function(req, res, next) {
    if (req.session.member) {
        var moduleId = req.body.moduleId;
        var acompanyName = req.body.acompanyName;
        var moduleUsage = req.body.moduleUsage;
        var moduleQuantity = req.body.moduleQuantity;
        var quantityOwned = req.body.quantityOwned;


        Module.getById(moduleId, function(err, module) {
            if (err) {
                if (err.name == "NotFoundError") {
                    var newModule = new Module({
                        moduleId: moduleId,
                        moduleUsage: moduleUsage,
                        moduleQuantity: moduleQuantity,
                        acompanyName: acompanyName,
                        quantityOwned: quantityOwned
                    });
                    newModule.insert(function(err) {
                        if (err) {
                            next(err);
                        } else {
                            res.render('add', {
                                member: req.session.member,
                                statusM: '資料已新增!',
                                statusA: null,
                                statusB: null
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
                    statusA: null,
                    statusB: null
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
        var componentId = req.body.componentId;
        var componentName = req.body.componentName;
        var componentQuantity = req.body.componentQuantity;
        var address = req.body.address;
        var phoneNo = req.body.phoneNo;
        var personIC = req.body.personIC;
        var lendOT = req.body.lendOT;
        var returnT = req.body.returnT;

        Acompany.getByName(firmName, function(err, acom) {
            if (err) {
                if (err.name == "NotFoundError") {
                    var newAcompany = new Acompany({
                        firmName: firmName,
                        componentId: componentId,
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
                            next(err);
                        } else {
                            res.render('add', {
                                member: req.session.member,
                                statusM: null,
                                statusA: '資料已新增!',
                                statusB: null
                            });
                        }
                    });
                } else {
                    next();
                }
            } else {
                res.render('add', {
                    member: req.session.member,
                    statusM: null,
                    statusA: '您輸入的資料有誤!',
                    statusB: null
                });
            }
        });
    } else {
        res.redirect('/');
    }
});

router.post('/bcom', function(req, res, next) {
    if (req.session.member) {
        var pumpId = req.body.pumpId;
        var pumpUsage = req.body.pumpUsage;
        var pumpQuantity = req.body.pumpQuantity;
        var pumpFlow = req.body.pumpFlow;
        var pumpType = req.body.pumpType;
        var pumpCategory = req.body.pumpCategory;
        var firmName = req.body.firmName;
        var personIC = req.body.personIC;
        var phoneNo = req.body.phoneNo;
        var address = req.body.address;
        console.log(pumpId);

        Bcompany.getByName(firmName, function(err, bcom) {
            if (err) {
                if (err.name == "NotFoundError") {
                    var newBcompany = new Bcompany({
                        firmName: firmName,
                        pumpId: pumpId,
                        pumpUsage: pumpUsage,
                        pumpQuantity: pumpQuantity,
                        pumpFlow: pumpFlow,
                        pumpType: pumpType,
                        pumpCategory: pumpCategory,
                        phoneNo: phoneNo,
                        personIC: personIC,
                        address: address
                    });
                    newBcompany.insert(function(err) {
                        if (err) {
                            next(err);
                        } else {
                            res.render('add', {
                                member: req.session.member,
                                statusM: null,
                                statusA: null,
                                statusB: '資料已新增!'
                            });
                        }
                    });
                } else {
                    next();
                }
            } else {
                res.render('add', {
                    member: req.session.member,
                    statusM: null,
                    statusA: null,
                    statusB: '您輸入的資料有誤!'
                });
            }
        });
    } else {
        res.redirect('/');
    }
});
module.exports = router;
