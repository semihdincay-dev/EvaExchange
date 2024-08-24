const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const shareRoutes = require('./routes/shareRoutes');

const app = express();
app.use(bodyParser.json());

// Set up routes
app.use('/api/users', userRoutes);
app.use('/api/portfolios', portfolioRoutes);
app.use('/api/transactions', transactionRoutes);
app.use('/api/shares', shareRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});