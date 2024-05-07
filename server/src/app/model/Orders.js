const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({

    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'client',
        required: true
    },
    products: [{
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'product'
        },
        amount: Number
    }],
    date: {
        type: Date,
        default: Date.now
    },

});

const Orders = mongoose.model('orders', OrderSchema)
module.exports = Orders