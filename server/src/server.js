const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const db = require("./database/config")
const products = require("./routes/product")
const clients = require("./routes/client")
const Orders = require('./routes/order')


const app = express()

mongoose.connect(db.uri)

app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use('/products', products)
app.use('/clients', clients)
app.use('/orders', Orders)



app.listen(8040, () => console.log("servidor conectado"));