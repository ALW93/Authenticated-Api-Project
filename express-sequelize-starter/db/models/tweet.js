"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define(
    "Tweet",
    {
      message: {
        type: DataTypes.STRING(280),
        allowNull: false,
      },
    },
    {}
  );
  Tweet.associate = function (models) {
    // associations can be defined here
  };
  return Tweet;
};
