var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');


var Bcompany = function(options) {
    this.firmName = options.firmName;
    this.pumpId = options.pumpId;
    this.pumpUsage = options.pumpUsage;
    this.pumpQuantity = options.pumpQuantity;
    this.pumpCategory = options.pumpCategory;
    this.pumpType = options.pumpType;
    this.pumpFlow = options.pumpFlow;
    this.personIC = options.personIC;
    this.address = options.address;
    this.phoneNo = options.phoneNo;
};

//Class Function

Bcompany.getAll = function(cb) {
    db.select()
        .from('bcompany')

        .map(function(row) {
            return new Bcompany(row);

        }).then(function(bcomList) {
          console.log('1231231231231');
            if (bcomList.length) {
                cb(null, bcomList);
            } else {
                cb(new GeneralErrors.NotFound());
            }
        })
        .catch(function(err) {
            cb(err);
        });
};

Bcompany.getByName = function(bcomName, cb) {
    db.select()
        .from('bcompany')
        .where({
            firmName: bcomName
        })
        .map(function(row) {
            return new Bcompany(row);
        })
        .then(function(bcomList) {
            if (bcomList.length) {
                cb(null, bcomList[0]);
            } else {
                cb(new GeneralErrors.NotFound());
            }
        })
        .catch(function(err) {
            cb(err);
        });
};

Bcompany.prototype.update = function(cb) {
    console.log("update");
    db("bcompany")
        .where({
            firmName: this.firmName
        })
        .update({
            pumpId: this.pumpId,
            pumpUsage: this.pumpUsage,
            pumpQuantity: this.pumpQuantity,
            pumpCategory: this.pumpCategory,
            pumpType: this.pumpType,
            pumpFlow: this.pumpFlow,
            address: this.address,
            phoneNo: this.phoneNo,
            personIC: this.personIC
        })
        .then(function() {
            cb(null, this);
        }.bind(this))
        .catch(function(err) {
            console.log("BCOMPANY UPDATED", err);
            cb(new GeneralErrors.Database());
        });
};

Bcompany.prototype.insert = function(cb) {
    console.log("insert");
    db("bcompany")
        .insert({
            pumpId: this.pumpId,
            pumpUsage: this.pumpUsage,
            pumpQuantity: this.pumpQuantity,
            pumpCategory: this.pumpCategory,
            pumpType: this.pumpType,
            pumpFlow: this.pumpFlow,
            address: this.address,
            phoneNo: this.phoneNo,
            personIC: this.personIC
        })
        .then(function(result) {
            var insertedName = result[0];
            this.firmName = insertedName;
            cb(null, this);
        }.bind(this))
        .catch(function(err) {
            console.log("BCOMPANY INSERT", err);
            cb(new GeneralErrors.Database());
        });
};

Bcompany.prototype.delete = function(cb) {
    console.log("delete");
    db('bcompany')
        .where({
            firmName: this.firmName
        })
        .del()
        .then(function() {
            cb(null);
        })
        .catch(function(err) {
            console.log(err);
            cb(null, new GeneralErrors.Database());
        });
};
module.exports = Bcompany;
