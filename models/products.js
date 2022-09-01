'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this is also used to create one to many relation
      Products.belongsTo(models.Categories); 
      Products.belongsToMany(models.Cart,{through:'CartProducts'})
    }
  }
  Products.init({
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};