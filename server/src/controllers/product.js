const express = require('express')
const mongoose = require("mongoose");
const Products = require('../app/model/Products');


const router = express.Router()


const getAllProducts = ((req, res) => {
    Products.find().sort({ date: 'desc' }).lean()
        .then((product) => {

            if (!product) {
                return res.status(404).send('Produto não encontrado')
            }
            res.send(product)

        }).catch((err) => {
            res.send(`Não foi possível encontrar os produtos : ${err.message}`)
        })
})

const getProduct = ((req, res) => {

    Products.findById(req.params.id)
        .sort({ date: 'desc' })
        .lean()
        .then((product) => {
            if (!product) {
                return res.status(404).send('Produto não encontrado')
            }
            res.send(product)

        })
        .catch((err) => {
            res.send(`Não foi possível encontrar o produto: ${err.message}`)
        })
})

const deleteProduct = ((req, res) => {

    Products
        .findByIdAndDelete(req.params.id)
        .then(() => {
            res.send("deletado com sucesso")

        })
        .catch((err) => {
            res.send(`Não foi possível deletar o produto: ${err.message}`)
        })
})

const createProduct = ((req, res) => {

    const newProduct = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
    }


    new Products(newProduct).save()
        .then((data) => res.send(data))
        .catch((err) => {
            res.send("Não foi possível criar o produto")
        })
})

const updateProduct = ((req, res) => {

    const editedProduct = {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
    }
    Products.findByIdAndUpdate(req.params._id, editedProduct)
        .then((product) => {
            res.send(product._id)

        })
        .catch((err) => {
            res.send(err)
        })
})





module.exports = { getAllProducts, getProduct, deleteProduct, updateProduct, createProduct };