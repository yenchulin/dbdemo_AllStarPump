var express = require('express');
var router = express.Router();
var Member = require('../models/Member');
var Module = require('../models/Module');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.session.member) {
        res.render('add', {
            member: req.session.member,
            statusM: null
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
                                statusM: '資料已新增!'
                            });
                        }
                    });
                } else {
                    next();
                }
            } else {
              console.log("error");
                res.render('add', {
                    member: req.session.member,
                    statusM: '您輸入的資料有誤!'
                });
            }
       });
    } else {
        res.redirect('/');
    }
});

module.exports = router;
