const Product = require('../models/Product');
const { StatusCodes } = require('http-status-codes');

const createProduct = async (req, res) => {
    res.send('Product Created');
};

const getAllProducts = async (req, res) => {
    res.send('Products');
};

module.exports = {
    createProduct,
    getAllProducts,
};
