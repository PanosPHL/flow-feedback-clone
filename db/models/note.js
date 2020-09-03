'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    content: DataTypes.STRING,
    timestamp: DataTypes.INTEGER,
    flowId: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    // associations can be defined here
  };
  return Note;
};