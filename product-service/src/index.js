const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8002;
app.listen(PORT, () => {
  console.log(`Product service running on port ${PORT}`);
});