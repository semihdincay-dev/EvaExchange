module.exports = (sequelize, DataTypes) => {
  const Share = sequelize.define('Share', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 3],
        isUppercase: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    currentPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  });
  return Share;
};