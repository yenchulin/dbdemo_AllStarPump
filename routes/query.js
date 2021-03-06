var express = require('express');
var router = express.Router();
var Module = require('../models/Module');
var Acompany = require('../models/Acompany');
var Bcompany = require('../models/Bcompany');
var async = require('async');

/* GET query page. */
router.get('/', function(req, res, next) {

    if (req.session.member) {
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
            });
    } else {
        res.redirect('/');
    }

});


router.post('/module', function(req, res, next) {
    var moduleId = req.body.moduleId;
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

router.post('/moduleResult/delete', function(req, res, next) {
    var moduleId = req.body.moduleId;
    Module.getById(moduleId, function(err, module) {
        if (err) {
            console.log(err);
            next();
        } else {
            module.delete(function(err) {
                if (err) {
                    console.log(err);
                    next();
                } else {
                    res.redirect('/query');
                }
            });
        }
    });
});


router.post('/acom', function(req, res, next) {
    var firmName = req.body.firmName;
    Acompany.getByName(firmName, function(err, acom) {
        if (err) {
            console.log(err);
            next();
        } else {
            res.render('AcomResult', {
                member: req.session.member,
                acom: acom
            });
        }
    });
});

router.post('/acomResult/delete', function(req, res, next) {
  var firmName = req.body.firmName;
    Acompany.getByName(firmName, function(err, acom) {
        if (err) {
            console.log(err);
            next();
        } else {
            acom.delete(function(err) {
                if (err) {
                    console.log(err);
                    next();
                } else {
                    res.redirect('/query');
                }
            });
        }
    });
});

router.post('/bcom', function(req, res, next) {
    var firmName = req.body.firmName;
    Bcompany.getByName(firmName, function(err, bcom) {
        if (err) {
            console.log(err);
            next();
        } else {
            res.render('BcomResult', {
                member: req.session.member,
                bcom: bcom
            });
        }
    });
});

router.post('/bcomResult/delete', function(req, res, next) {
  var firmName = req.body.firmName;
  console.log(firmName);
    Bcompany.getByName(firmName, function(err, bcom) {
        if (err) {
            console.log(err);
            next();
        } else {
            bcom.delete(function(err) {
                if (err) {
                    console.log(err);
                    next();
                } else {
                    res.redirect('/', {
                        member: req.session.member,
                    });
                }
            });
        }
    });
});

module.exports = router;
