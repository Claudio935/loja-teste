const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ClientSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

});

const Clients = mongoose.model('clients', ClientSchema)
module.exports = Clients