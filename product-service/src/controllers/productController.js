const { getProducts, addProduct } = require('../models/productModel');

const getAllProducts = async (req, res) => {
  const products = await getProducts();
  res.json(products);
};

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  const newProduct = await addProduct(name, price);
  res.status(201).json(newProduct);
};

module.exports = { getAllProducts, createProduct };