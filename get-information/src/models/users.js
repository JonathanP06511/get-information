const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('User', {
    idusers: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    idcard: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  }, {
    tableName: 'users',
    timestamps: false, 
  });
};
