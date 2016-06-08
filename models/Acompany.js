var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');


var acom = function(options) {
  this.firmName = options.firmName;
  this.componentID = options.componentID;
  this.componentName = options.componentName;
  this.componentQuantity = options.componentQuantity;
  this.pumpCategory = options.pumpCategory;
  this.address = options.address;
  this.phoneNo = options.phoneNo;
  this.personIC = options.personIC;
  this.lendOT = options.lendOT;
  this.returnT = options.returnT;
};


//Class Function
acom.get = function(acomName, cb) {
  //這邊是當傳入一個memberId時，進入資料庫查出相對應的member資料
  db.select()
    .from('acompany')
    .where({
      firmName : acomName
    })
    .map(function(row) {
      //將select出來的資料轉換成Member物件
      return new acom(row);
    })
    .then(function(acomList) {
      if(acomList.length) {
        cb(null, acomList[0]);
      } else {
        //這邊要產生一個NotFound err給前端，因為error很常用到，我們會獨立出去一個檔案
        cb(new GeneralErrors.NotFound());
      }
    })
    .catch(function(err) {
      cb(err);
    })
}


acom.getbyname = function(acomName, cb) {
  db.select()
    .from('acompany')
    .where({
      firmName : acomName
    })
    .map(function(row) {
      return new acom(row);
    })
    .then(function(acomList) {
      if(acomList.length) {
        cb(null, acomList[0]);
      } else {
        cb(new GeneralErrors.NotFound());
      }
    })
}

acom.prototype.save = function (cb) {
  //save的概念是當物件不存在時新增，存在時對DB做更新
  if (this.firmName) {
    //已存在
    db("acompany")
      .where({
        firmName : this.firmName
      })
      .update({
        componentID: this.componentID,
        componentName : this.componentName,
        componentQuantity : this.componentQuantity,
        pumpCategory : this.pumpCategory,
        address : this.address,
        phoneNo : this.phoneNo,
        personIC : this.personIC,
        lendOT : this.lendOT,
        returnT : this.returnT

      })
      .then(function() {
        cb(null, this);
      }.bind(this))
      .catch(function(err) {
        console.log("aCompany UPDATED", err);
        cb(new GeneralErrors.Database());
      });
  } else {
    //不存在
    db("acompany")
      .insert({
        componentID: this.componentID,
        componentName : this.componentName,
        componentQuantity : this.componentQuantity,
        pumpCategory : this.pumpCategory,
        address : this.address,
        phoneNo : this.phoneNo,
        personIC : this.personIC,
        lendOT : this.lendOT,
        returnT : this.returnT
      })
      .then(function(result) {
        var insertedName = result[0];
        this.firmName = insertedName;
        cb(null, this);
      }.bind(this))
      .catch(function(err) {
        console.log("aCompany INSERT", err);
        cb(new GeneralErrors.Database());
      });
  }
};
