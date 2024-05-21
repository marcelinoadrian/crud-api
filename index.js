const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/products', productRoute)

mongoose.connect('mongodb+srv://marcelinoadriang2030:pYVySiGFlF6sS8nl@backenddb.pu1bhbz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => console.log('Connected!'));


app.get('/', (req, res) => {
    res.send("Hello World")
})


app.listen(5000, () => {
    console.log('Server is running on port 5000.')
})

