var express = require('express');
var router = express.Router();
var Acompany = require('../models/Acompany');

router.post('/', function(req, res, next) {
    var firmName = req.body.firmName;
    var componentId = req.body.componentId;
    var componentName = req.body.componentName;
    var componentQuantity = req.body.componentQuantity;
    var address = req.body.address;
    var phoneNo = req.body.phoneNo;
    var personIC = req.body.personIC;
    var lendOT = req.body.lendOT;
    var returnT = req.body.returnT;
    console.log(req.body);

    Acompany.getByName(firmName, function(err, acom) {
        if (err) {
            console.log(err.name);
            next(err);
        } else {
            var updtAcom = new Acompany({
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
            console.log(updtAcom);
            updtAcom.update(function(err) {
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
