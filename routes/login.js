var express = require('express');
var router = express.Router();
var Member = require('../models/Member');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', {
        member: null,
        status: null
    });
});

router.post('/', function(req, res, next) {
    var account = req.body.account;
    var password = req.body.password;

    Member.getByAccount(account, function(err, member) {
        if (err || password !== member.password) {
            res.render('login', {
              member: null,
              status: '您的帳號或密碼錯誤!'
            });
        } else {
            req.session.member = member;
            res.redirect('/');
        }
    });
});
module.exports = router;
