module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
  });

  Portfolio.associate = (models) => {
    Portfolio.belongsTo(models.User, { foreignKey: 'userId' });
    Portfolio.hasMany(models.Transaction, { foreignKey: 'portfolioId' });
  };

  return Portfolio;
};