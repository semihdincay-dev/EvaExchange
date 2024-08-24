const express = require('express');
const transactionController = require('../controllers/transactionController');
const router = express.Router();

router.post('/buy', transactionController.buyShares);

router.post('/sell', transactionController.sellShares);

module.exports = router;