var express = require('express');
var router = express.Router();
var Module = require('../models/Module');

router.post('/', function(req, res, next) {
    var moduleId = req.body.moduleId;
    var moduleUsage = req.body.moduleUsage;
    var moduleQuantity = req.body.moduleQuantity;
    var acompanyName = req.body.acompanyName;
    var quantityOwned = req.body.quantityOwned;
    console.log(req.body);

    Module.getById(moduleId, function(err, module) {
        if (err) {
            console.log(err.name);
            next(err);
        } else {
            var updtModule = new Module({
                moduleId: moduleId,
                moduleUsage: moduleUsage,
                moduleQuantity: moduleQuantity,
                acompanyName: acompanyName,
                quantityOwned: quantityOwned
            });
            console.log(updtModule);
            updtModule.update(function(err) {
                if (err) {
                    next(err);
                } else {
                    res.redirect('/query');
                }
            });
        }
    });
});
module.exports = router;
