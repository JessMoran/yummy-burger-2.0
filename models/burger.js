// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and val are arrays.
  insertOne: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVal, condition, cb) {
    orm.updateOne("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
