const express = require('express');
const portfolioController = require('../controllers/portfolioController');
const router = express.Router();

router.post('/register', portfolioController.registerPortfolio);

router.get('/:userId', portfolioController.getUserPortfolios);

module.exports = router;