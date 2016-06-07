var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');

var Module = function(options) {
  this.modulelId = options.modulelId;
  this.moduleUsage = options.moduleUsage;
  this.moduleQuantity = options.moduleQuantity;
  this.currentLocation = options.currentLocation;
};

Module.getById = function(modulelId){
  db.select()
      .from('module')
      .where({
          modulelId: modulelId
      }).map(function(row) {
          return new Module(row);
      }).then(function(moduleList) {
          if (moduleList.length) {
              cb(null, moduleList[0]);
          } else {
              cb(new GeneralErrors.NotFound());
          }
      })
      .catch(function(err) {
          cb(err);
      });
};

Member.prototype.save = function(cb) {
    db("module")
        .insert({
          modulelId: this.modulelId,
          moduleUsage: this.moduleUsage,
          moduleQuantity: this.moduleQuantity,
          currentLocation: this.currentLocation
        })
        .then(function(result) {
            var insertedId = result[0];
            this.modulelId = insertedId;
            cb(null, this);
        }.bind(this))
        .catch(function(err) {
            console.log("MODULE INSERT", err);
            cb(new GeneralErrors.Database());
        });
};

module.exports = Module;
