var express = require('express');
var router = express.Router();
var Member = require('../models/Member');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', {
        member: null,
        status: null
    });
});

router.post('/', function(req, res, next) {
    var account = req.body.account;
    var password = req.body.password;

    Member.getByAccount(account, function(err, member) {
        if (err) {
            if (err.name == "NotFoundError") {
                var newMember = new Member({
                    account: account,
                    password: password
                });
                newMember.insert(function(err) {
                  console.log("saved");
                    if (err) {
                        next(err);
                    } else {
                        //再重新導向之前，我們要讓使用者登入，因此我們需要使用到session
                        req.session.member = newMember;
                        res.redirect('/');
                    }
                });
            } else {
                next();
            }
        } else {
            res.render('register', {
                member: null,
                status: '您的帳號已有人使用!'
            });
        }
    });

});

module.exports = router;
