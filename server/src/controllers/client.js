const Clients = require("../app/model/Clients")

const getAllClients = ((req, res) => {
    Clients.find().sort({ date: 'desc' }).lean()
        .then((client) => {
            if (!client) {
                return res.status(404).send('Product not found')
            }
            res.send(client)

        })
        .catch((err) => {
            res.send(`Não foi possível encontrar os clientes: ${err.message}`)
        })
})

const getClient = ((req, res) => {

    Clients.findById(req.params.id)
        .sort({ date: 'desc' })
        .lean()
        .then((client) => {
            if (!client) {
                return res.status(404).send('Cliente não encontrado')
            }
            res.send(client)

        })
        .catch((err) => {
            res.send(err)
        })
})

const deleteClient = ((req, res) => {

    Clients
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.send("deletado com sucesso")

        })
        .catch((err) => {
            res.send(`Não foi possível deletar o cliente : ${err.message}`)
        })
})


const createClient = ((req, res) => {

    const newClient = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    }

    new Clients(newClient).save()
        .then((data) => res.send(data))
        .catch((err) => {
            res.send(`Não foi possível criar o cliente : ${err.message}`)
        })
})

const updateClient = ((req, res) => {

    const editedClient = {
        name: req.body.name,
        address: req.body.adress,
        email: req.body.email,
        phone: req.body.phone
    }
    Clients.findByIdAndUpdate(req.params._id, editedClient)
        .then((client) => {
            res.send(client._id)

        })
        .catch((err) => {
            res.send(`Não foi possível atualizar o cliente : ${err.message}`)
        })
})

module.exports = {
    getAllClients,
    getClient,
    deleteClient,
    updateClient,
    createClient
};