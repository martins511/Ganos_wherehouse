'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StockAdjustment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StockAdjustment.belongsTo(models.Product,{onDelete: "CASCADE"})
    }
  }
  StockAdjustment.init({
    productname: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    received: DataTypes.INTEGER,
    bal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StockAdjustment',
  });
  return StockAdjustment;
};