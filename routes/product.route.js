const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product.model')

const router = express.Router
const app = express();

app.get('/api/products', async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/api/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.put('/api/products/:id', async (req,res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product)
            {
                return res.status(404).json({message: "Product not found"})
            }
        
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/api/products/:id', async (req,res) => {
    try {
        const {id} = req.params
       const product = await Product.findByIdAndDelete(id, req.body)
          if(!product)
            {
                return res.status(404).json({message: "Product not found"})
            }
        res.status(200).json({message: "Product deleted successfully"})
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})


module.exports = router