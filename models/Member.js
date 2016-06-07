//這是一個Member Model
var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');

var Member = function(options) {
    this.password = options.password;
    this.account = options.account;
};

Member.getByAccount = function(memberAct, cb) {
    db.select()
        .from('member')
        .where({
            account: memberAct
        }).map(function(row) {
            return new Member(row);
        }).then(function(memberList) {
            if (memberList.length) {
                cb(null, memberList[0]);
            } else {
                cb(new GeneralErrors.NotFound());
            }
        })
        .catch(function(err) {
            cb(err);
        });
};

Member.prototype.save = function(cb) {
    //save的概念是當物件不存在時新增，存在時對DB做更新
    if (this.account) {
        //已存在
        db("member")
            .where({
                account: this.account
            })
            .update({
                password: this.password
            })
            .then(function() {
                cb(null, this);
            }.bind(this))
            .catch(function(err) {
                console.log("MEMBER UPDATED", err);
                cb(new GeneralErrors.Database());
            });
    } else {
        //不存在
        db("member")
            .insert({
                account: this.account,
                password: this.password
            })
            .then(function(result) {
                var insertedId = result[0];
                this.account = insertedAct;
                cb(null, this);
            }.bind(this))
            .catch(function(err) {
                console.log("MEMBER INSERT", err);
                cb(new GeneralErrors.Database());
            });
    }
};

module.exports = Member;
