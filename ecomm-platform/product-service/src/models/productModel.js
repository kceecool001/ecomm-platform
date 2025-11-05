const pool = require('../../config/db.js');

const getProducts = async () => {
  const result = await pool.query('SELECT * FROM products');
  return result.rows;
};

const addProduct = async (name, price) => {
  const result = await pool.query(
    'INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *',
    [name, price]
  );
  return result.rows[0];
};

module.exports = { getProducts, addProduct };