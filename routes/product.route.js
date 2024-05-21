const express = require('express');
const {getAllProducts, getProduct, addProduct, updatedProduct,deleteProduct} = require('../controllers/product.controller')

const router = express.Router();
const app = express();

router.get('/', getAllProducts)
router.get('/:id', getProduct)

router.post('/', addProduct)

router.put('/:id', updatedProduct)

router.delete('/:id', deleteProduct)


module.exports = router