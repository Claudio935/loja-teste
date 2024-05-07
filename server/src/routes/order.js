const express = require('express')
const { getAllOrders, getOrder, deleteOrder, createOrder, updateOrder } = require('../controllers/order');


const router = express.Router()

router.get('/', getAllOrders);

router.get('/:id', getOrder);

router.get('delete/:id', deleteOrder);

router.post('/create', createOrder);

router.post('/:id', updateOrder);




module.exports = router;