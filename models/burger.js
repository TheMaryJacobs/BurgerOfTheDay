const Sequelize = require("sequelize");
const connect = require("../config/connection.js");


const db = connect.define("burger", {
  name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = db;