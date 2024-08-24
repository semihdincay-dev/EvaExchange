const { Portfolio } = require('../models');

exports.registerPortfolio = async (req, res) => {
  try {
    const { name, userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: 'User ID is required.' });
    }

    const portfolio = await Portfolio.create({ name, userId });

    res.status(201).json(portfolio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUserPortfolios = async (req, res) => {
  try {
    const { userId } = req.params;
    const portfolios = await Portfolio.findAll({ where: { userId } });
    res.status(200).json(portfolios);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};