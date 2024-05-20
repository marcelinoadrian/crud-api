const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://marcelinoadriang2030:pYVySiGFlF6sS8nl@backenddb.pu1bhbz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => console.log('Connected!'));


app.get('/', (req, res) => {
    res.send("Hello World")
})

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

app.listen(5000, () => {
    console.log('Server is running on port 5000.')
})
