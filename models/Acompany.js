var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');

var Acompany = function(options) {
  this.firmName = options.firmName;
  this.componentID = options.componentID;
  this.componentName = options.componentName;
  this.componentQuantity = options.componentQuantity;
  this.address = options.address;
  this.phoneNo = options.phoneNo;
  this.personIC = options.personIC;
  this.lendOT = options.lendOT;
  this.returnT = options.returnT;
};


//Class Function
Acompany.getByName = function(acomName, cb) {
  db.select()
    .from('acompany')
    .where({
      firmName : acomName
    })
    .map(function(row) {
      return new Acompany(row);
    })
    .then(function(acomList) {
      if(acomList.length) {
        cb(null, acomList[0]);
      } else {
        cb(new GeneralErrors.NotFound());
      }
    })
    .catch(function(err) {
      cb(err);
    });
};

Acompany.prototype.insert = function(cb) {
    console.log("insert");
    db('acompany')
        .insert({
          firmName: this.firmName,
          componentID: this.componentID,
          componentName: this.componentName,
          componentQuantity: this.componentQuantity,
          address: this.address,
          phoneNo: this.phoneNo,
          personIC: this.personIC,
          lendOT: this.lendOT,
          returnT: this.returnT
        })
        .then(function(result) {
          console.log("aaaa");
            var insertedName = result[0];
            this.firmName = insertedName;
            cb(null, this);
        }.bind(this))
        .catch(function(err) {
            console.log("ACOMPANY INSERT", err);
            cb(new GeneralErrors.Database());
        });

};

Acompany.prototype.update = function(cb) {
    console.log("update");
    db('acompany')
        .update({
          componentID: options.componentID,
          componentName: options.componentName,
          componentQuantity: options.componentQuantity,
          address: options.address,
          phoneNo: options.phoneNo,
          personIC: options.personIC,
          lendOT: options.lendOT,
          returnT: options.returnT
        })
        .where({
            firmName: options.firmName,
        })
        .then(function() {
            cb(null);
        })
        .catch(function(err) {
            console.log(err);
            cb(null, new GeneralErrors.Database());
        });
};

Acompany.prototype.delete = function(cb) {
    console.log("delete");
    db('acompany')
        .where({
            firmName: options.firmName
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
module.exports = Acompany;
