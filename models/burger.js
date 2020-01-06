const orm = require ("orm.js");

// * Also inside `burger.js`, create the code that will call 
// the ORM functions using burger specific input for the ORM.

//  * Export at the end of the `burger.js` file.

const Sequelize = require('sequelize')
const Model = Sequelize.Model;

module.exports = (sequelize, DataTypes) => {
  class Burgers extends Model {}
  Burgers.init({
    // attributes
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
      // allowNull defaults to true
    }
  }, {
      sequelize,
      modelName: 'Burgers'
      // options
  });
  Burgers.sync();
  return Burgers;
};