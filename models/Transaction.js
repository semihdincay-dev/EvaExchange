module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: DataTypes.ENUM('BUY', 'SELL'),
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
    });
  
    Transaction.associate = (models) => {
      Transaction.belongsTo(models.Portfolio, { foreignKey: 'portfolioId' });
      Transaction.belongsTo(models.Share, { foreignKey: 'shareId' });
    };
  
    return Transaction;
  };