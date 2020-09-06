'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flow = sequelize.define('Flow', {
    name: {
      type: DataTypes.STRING(256),
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    description: {
      type: DataTypes.TEXT
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    videoId: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Flow.associate = function (models) {
    Flow.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Flow.belongsTo(models.User, { foreignKey: 'userId' });
    Flow.belongsTo(models.Video, { foreignKey: 'videoId' });

    Flow.hasMany(models.Note, { onDelete: 'CASCADE', foreignKey: 'flowId' });
  };
  return Flow;
};