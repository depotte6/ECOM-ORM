const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
   id: {
     type: DataTypes.INTEGER,
     AllowNull: false,
     primaryKey: true,
     autoIncrement: true,
   },
   tag_name: {
     type: DataTypes.STRING,
     AllowNull: false,
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
