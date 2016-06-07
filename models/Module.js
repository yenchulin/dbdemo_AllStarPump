var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');

var Module = function(options) {
  this.moduleId = options.moduleId;
  this.moduleUsage = options.moduleUsage;
  this.moduleQuantity = options.moduleQuantity;
  this.currentLocation = options.currentLocation;
};

Module.getById = function(moduleId){
  db.select()
      .from('module')
      .where({
          moduleId: moduleId
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

Module.prototype.save = function(cb) {
  if(this.moduleId) {
    db('module')
      .update({
        moduleUsage: this.moduleUsage,
        moduleQuantity: this.moduleQuantity,
        currentLocation: this.currentLocation
      })
      .where({
        moduleId: this.moduleId,
      })
      .then(function() {
        cb(null);
      })
      .catch(function(err) {
        console.log(err);
        cb(null, new GeneralErrors.Database());
      });
  } else {
    db('module')
        .insert({
          moduleId: this.moduleId,
          moduleUsage: this.moduleUsage,
          moduleQuantity: this.moduleQuantity,
          currentLocation: this.currentLocation
        })
        .then(function(result) {
            var insertedId = result[0];
            this.moduleId = insertedId;
            cb(null, this);
        }.bind(this))
        .catch(function(err) {
            console.log("MODULE INSERT", err);
            cb(new GeneralErrors.Database());
        });
  }
};

var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');

var Module = function(options) {
  this.moduleId = options.moduleId;
  this.moduleUsage = options.moduleUsage;
  this.moduleQuantity = options.moduleQuantity;
  this.currentLocation = options.currentLocation;
};

Module.getById = function(modulelId){
  db.select()
      .from('module')
      .where({
          modulelId: moduleId
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
  if(this.moduleId) {
    db('module')
      .update({
        moduleUsage: this.moduleUsage,
        moduleQuantity: this.moduleQuantity,
        currentLocation: this.currentLocation
      })
      .where({
        moduleId: this.moduleId,
      })
      .then(function() {
        cb(null);
      })
      .catch(function(err) {
        console.log(err);
        cb(null, new GeneralErrors.Database());
      });
  } else {
    db('module')
        .insert({
          modulelId: this.moduleId,
          moduleUsage: this.moduleUsage,
          moduleQuantity: this.moduleQuantity,
          currentLocation: this.currentLocation
        })
        .then(function(result) {
            var insertedId = result[0];
            this.moduleId = insertedId;
            cb(null, this);
        }.bind(this))
        .catch(function(err) {
            console.log("MODULE INSERT", err);
            cb(new GeneralErrors.Database());
        });
  }
};

module.exports = Module;
