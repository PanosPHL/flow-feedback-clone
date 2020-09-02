'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        min: 4
      }
    },
    cover: {
      type: DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isImage(value) {
          const imageRegex = /\.jpg$|\.png$/i;

          if (!value.test(imageRegex)) {
            throw new Error('Cover field must be a valid image path')
          }
        }
      }
    }
  }, {});
  Category.associate = function (models) {
    Category.hasMany(models.Flow, { foreignKey: 'categoryId' });
  };
  return Category;
};