var db = require('../libs/db'); //引入我們的sql builder
var GeneralErrors = require('../errors/GeneralErrors');

var Module = function(options) {
    this.moduleId = options.moduleId;
    this.moduleUsage = options.moduleUsage;
    this.moduleQuantity = options.moduleQuantity;
    this.acompanyName = options.acompanyName;
    this.quantityOwned = options.quantityOwned;

};

Module.getById = function(moduleId, cb) {
    db.select()
        .from('module')
        .where({
            moduleId: moduleId
        })
        .map(function(row) {
            return new Module(row);
        })
        .then(function(moduleList) {
            if (moduleList.length) {
                cb(null, moduleList[0]);
            } else {
                cb(new GeneralErrors.NotFound());
            }
        })
        .catch(function(err) {
            console.log(err);
            cb(err);
        });
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

Module.prototype.insert = function(cb) {
    console.log("insert");
    db('module')
        .insert({
            moduleId: this.moduleId,
            moduleUsage: this.moduleUsage,
            moduleQuantity: this.moduleQuantity,
            acompanyName: this.acompanyName,
            quantityOwned: this.quantityOwned
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

};

Module.prototype.update = function(cb) {
    console.log("update");
    db('module')
        .where({
            moduleId: this.moduleId,
        })
        .update({
            moduleUsage: this.moduleUsage,
            moduleQuantity: this.moduleQuantity,
            acompanyName: this.acompanyName,
            quantityOwned: this.quantityOwned
        })
        .then(function() {
            cb(null);
        })
        .catch(function(err) {
            console.log(err);
            cb(null, new GeneralErrors.Database());
        });
};

Module.prototype.delete = function(cb) {
    console.log("delete");
    db('module')
        .where({
            moduleId: this.moduleId
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
module.exports = Module;
