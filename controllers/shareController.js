const { Share } = require('../models');

exports.registerShare = async (req, res) => {
  try {
    const { symbol, name, currentPrice } = req.body;

    if (!/^[A-Z]{3}$/.test(symbol)) {
      return res.status(400).json({ error: 'Symbol must be 3 uppercase letters.' });
    }

    if (!/^\d+(\.\d{1,2})?$/.test(currentPrice)) {
      return res.status(400).json({ error: 'Price must have exactly 2 decimal places.' });
    }

    const share = await Share.create({ symbol, name, currentPrice });

    res.status(201).json(share);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};