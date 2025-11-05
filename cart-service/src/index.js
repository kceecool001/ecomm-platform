const express = require('express');
const dotenv = require('dotenv');
const cartRoutes = require('./routes/cartRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/cart', cartRoutes);

const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
  console.log(`Cart service running on port ${PORT}`);
});