const Orders = require("../app/model/Orders")

const getAllOrders = ((req, res) => {
    Orders.find().sort({ date: 'desc' }).lean()
        .then((order) => {
            if (!order) {
                return res.status(404).send('Pedido não encontrado')
            }
            res.send(order)

        })
        .catch((err) => {
            res.send(`Não foi possível realizar este pedido: ${err.message}`)
        })
})

const getOrder = ((req, res) => {

    Orders.findById(req.params.id)
        .sort({ date: 'desc' })
        .lean()
        .then((order) => {
            if (!order) {
                return res.status(404).send('Pedido não encontrado')
            }
            res.send(order)

        })
        .catch((err) => {
            res.send(`Não foi possível realizar este pedido: ${err.message}`)
        })
})

const deleteOrder = ((req, res) => {

    Orders
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.send("Pedido deletado com sucesso")

        })
        .catch((err) => {
            res.send(`Não foi possível realizar este pedido: ${err.message}`)
        })
})


const createOrder = ((req, res) => {

    const newOrder = {
        clientId: req.body.clienteId,
        products: req.body.products,

    }

    new Orders(newOrder).save()
        .then((data) => res.send(data))
        .catch((err) => {
            res.send(`Não foi possível realizar este pedido: ${err.message}`)
        })
})

const updateOrder = ((req, res) => {

    const editedOrder = {
        clientId: req.body.clienteId,
        products: req.body.products,
        date: req.body.date,
    }
    Orders.findByIdAndUpdate(req.params._id, editedOrder)
        .then((order) => {
            res.send(order._id)

        })
        .catch((err) => {
            res.send(err)
        })
})



module.exports = {
    getAllOrders,
    getOrder,
    deleteOrder,
    updateOrder,
    createOrder,
};