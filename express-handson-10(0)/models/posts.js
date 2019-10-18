'use strict';
module.exports = (sequelize, DataTypes) => {
  var posts = sequelize.define(
    'posts',
    {
      PostId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      PostTitle: DataTypes.STRING,
      PostBody: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull:false
      },
    },
    );
    posts.associate = function(models) {
    };
  return posts;
};