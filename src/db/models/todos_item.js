'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todos_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  todos_item.init({
    todos_id: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todos_item',
    underscored: true,
  });
  return todos_item;
};