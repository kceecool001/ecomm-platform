const { getCartItems, addCartItem, updateCartQuantity, deleteCartItem } = require('../models/cartModel');

const getCart = async (req, res) => {
  const userId = 1; // Replace with JWT-based user ID
  const items = await getCartItems(userId);
  res.json(items);
};

const addToCart = async (req, res) => {
  const userId = 1;
  const { product_id, quantity } = req.body;
  const item = await addCartItem(userId, product_id, quantity);
  res.status(201).json(item);
};

const updateCartItem = async (req, res) => {
  const { id } = req.params;
  const { quantity } = req.body;
  const updated = await updateCartQuantity(id, quantity);
  res.json(updated);
};

const removeFromCart = async (req, res) => {
  const { id } = req.params;
  await deleteCartItem(id);
  res.status(204).send();
};

module.exports = { getCart, addToCart, updateCartItem, removeFromCart };
