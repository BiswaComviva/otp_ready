'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: {type:DataTypes.STRING,
      primary_key:true
    },
    user_name: DataTypes.STRING,
    phone: {
      type:DataTypes.INTEGER,
      len:10
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
