const express = require('express');
const shareController = require('../controllers/shareController');
const router = express.Router();

router.post('/register', shareController.registerShare);

module.exports = router;