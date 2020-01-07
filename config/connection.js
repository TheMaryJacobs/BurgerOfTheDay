// set up code to connect node to mysql
// export connection

const mysql = require("mysql");
const Sequelize = require("sequelize");

const sequelize = new Sequelize("burgers_db", "root", "root", {
  host: "localhost",
  port: 8080,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = sequelize;