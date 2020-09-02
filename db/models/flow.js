'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flow = sequelize.define('Flow', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    videoId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {});
  Flow.associate = function(models) {
    // associations can be defined here
  };
  return Flow;
};