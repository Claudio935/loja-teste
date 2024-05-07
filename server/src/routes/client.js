const express = require('express')
const {
    getAllClients,
    getClient, deleteClient,
    createClient,
    updateClient } = require('../controllers/client');


const router = express.Router()

router.get('/', getAllClients);

router.get('/:id', getClient);

router.get('delete/:id', deleteClient);

router.post('/create', createClient);

router.post('/:id', updateClient);


module.exports = router;