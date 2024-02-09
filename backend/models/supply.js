'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Supply.belongsTo(models.Product,{onDelete: "CASCADE"})
    }
  }
  Supply.init({
    productname: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    customername: DataTypes.STRING,
    supply: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    createdAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Supply',
  });
  return Supply;
};