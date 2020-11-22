'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Issue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Issue.init({
    subject: DataTypes.STRING,
    description: DataTypes.STRING,
    resolved: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Issue',
  });
  return Issue;
};