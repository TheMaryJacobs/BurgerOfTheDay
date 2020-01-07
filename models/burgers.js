const orm = require ("../config/orm.js");

// * Also inside `burger.js`, create the code that will call 
// the ORM functions using burger specific input for the ORM.

//  * Export at the end of the `burger.js` file.

const burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = burger;