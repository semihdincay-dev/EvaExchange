const { Share, Transaction, Portfolio } = require('../models');

exports.buyShares = async (req, res) => {
  try {
    const { portfolioId, shareId, quantity } = req.body;
    console.log('Received shareId:', shareId);
    const share = await Share.findByPk(shareId);
    
    if (!share) {
      return res.status(404).json({ error: 'Share not found' });
    }

    const price = share.currentPrice;

    const transaction = await Transaction.create({
      type: 'BUY',
      portfolioId,
      shareId,
      quantity,
      price,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.sellShares = async (req, res) => {
  try {
    const { portfolioId, shareId, quantity } = req.body;
    const share = await Share.findByPk(shareId);
    
    if (!share) {
      return res.status(404).json({ error: 'Share not found' });
    }

    const portfolio = await Portfolio.findByPk(portfolioId, {
      include: [{
        model: Transaction,
        where: { shareId }
      }]
    });

    if (!portfolio) {
      return res.status(404).json({ error: 'Portfolio not found' });
    }

    const totalBought = portfolio.Transactions
      .filter(t => t.type === 'BUY')
      .reduce((sum, t) => sum + t.quantity, 0);

    const totalSold = portfolio.Transactions
      .filter(t => t.type === 'SELL')
      .reduce((sum, t) => sum + t.quantity, 0);

    const availableShares = totalBought - totalSold;

    if (quantity > availableShares) {
      return res.status(400).json({ error: 'Not enough shares to sell' });
    }

    const price = share.currentPrice;

    const transaction = await Transaction.create({
      type: 'SELL',
      portfolioId,
      shareId,
      quantity,
      price,
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};