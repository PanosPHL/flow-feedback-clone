'use strict';
module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define('Site', {
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Site.associate = function(models) {
    Site.hasMany(models.Video, { foreignKey: 'siteId' });
  };
  return Site;
};