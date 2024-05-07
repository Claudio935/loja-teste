const express = require('express')
const mongoose = require("mongoose");
const Products = require('../app/model/Products');
const { getAllProducts, getProduct, deleteProduct, createProduct, updateProduct } = require('../controllers/product');


const router = express.Router()

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.get('/delete/:id', deleteProduct);

router.post('/create', createProduct);

router.post('/:id', updateProduct);


module.exports = router;