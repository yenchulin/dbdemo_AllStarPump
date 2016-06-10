var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');

var Module = function(options) {
  this.moduleId = options.moduleId,
  this.moduleQuantity = options.moduleQuantity,
  this.currentLocation = options.currentLocation,
  this.moduleUsage = options.moduleUsage
};

Module.getAll = function(cb) {
    db.select()
        .from('module')
        .map(function(row) {
            return new Module(row);
        }).then(function(moduleList) {
            if (moduleList.length) {
                cb(null, moduleList);
            } else {
                cb(new GeneralErrors.NotFound());
            }
        })
        .catch(function(err) {
            cb(err);
        });
};
Module.getByID = function(id, cb) {
    db.select()
        .from('module')
        .where({
          moduleId:id
        })
        .map(function(row) {
            return new Module(row);
          })
        .then(function(moduleList) {
            if (moduleList.length) {
                cb(null, moduleList);
            } else {
                cb(new GeneralErrors.NotFound());
            }
        })
        .catch(function(err) {
            cb(err);
        });
};


module.exports = Module;
