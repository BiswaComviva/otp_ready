'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_otp = sequelize.define('user_otp', {
    otp: {type:DataTypes.INTEGER},
    MSSISDN: {
      type:DataTypes.STRING,
      primary_key:true
    }


  });

  user_otp.associate = function (models) {
    // models.Task.belongsTo(models.User, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // });
  };

  return user_otp;
};
