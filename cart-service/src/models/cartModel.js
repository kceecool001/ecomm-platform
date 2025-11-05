const pool = require('../../config/db');

const getCartItems = async (userId) => {
  const result = await pool.query('SELECT * FROM cart_items WHERE user_id = $1', [userId]);
  return result.rows;
};

const addCartItem = async (userId, productId, quantity) => {
  const result = await pool.query(
    'INSERT INTO cart_items (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
    [userId, productId, quantity]
  );
  return result.rows[0];
};

const updateCartQuantity = async (id, quantity) => {
  const result = await pool.query(
    'UPDATE cart_items SET quantity = $1 WHERE id = $2 RETURNING *',
    [quantity, id]
  );
  return result.rows[0];
};

const deleteCartItem = async (id) => {
  await pool.query('DELETE FROM cart_items WHERE id = $1', [id]);
};

module.exports = { getCartItems, addCartItem, updateCartQuantity, deleteCartItem };
