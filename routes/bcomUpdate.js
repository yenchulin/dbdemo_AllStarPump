var express = require('express');
var router = express.Router();
var Bcompany = require('../models/Bcompany');

router.post('/', function(req, res, next) {
    var firmName = req.body.firmName;
    var pumpId = req.body.pumpId;
    var pumpUsage = req.body.pumpUsage;
    var pumpQuantity = req.body.pumpQuantity;
    var pumpCategory = req.body.pumpCategory;
    var pumpType = req.body.pumpType;
    var pumpFlow = req.body.pumpFlow;
    var personIC = req.body.personIC;
    var address = req.body.address;
    var phoneNo = req.body.phoneNo;
    console.log(req.body);

    Bcompany.getByName(firmName, function(err, bcom) {
        if (err) {
            console.log(err.name);
            next(err);
        } else {
            var updtBcompany = new Bcompany({
                firmName: firmName,
                pumpId: pumpId,
                pumpUsage: pumpUsage,
                pumpQuantity: pumpQuantity,
                pumpCategory: pumpCategory,
                pumpType: pumpType,
                pumpFlow: pumpFlow,
                address: address,
                phoneNo: phoneNo,
                personIC: personIC
            });
            console.log(updtBcompany);
            updtBcompany.update(function(err) {
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
