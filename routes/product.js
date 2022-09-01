const express = require('express')
const {createProduct, getAllProduct,filterBasedOnProduct, getProductOnId, updateProduct, deleteProduct } = require('../controller/product')

const { validateProductData, verifyToken, isAdmin } = require('../middleware')
const routes = express.Router()

routes.post('/ecom/api/products',[validateProductData,verifyToken, isAdmin], createProduct)

routes.get('/ecom/api/products', getAllProduct)

routes.get('/ecom/api/products/filter', filterBasedOnProduct)

routes.get('/ecom/api/products/:id', getProductOnId)

routes.patch('/ecom/api/products',[verifyToken, isAdmin], updateProduct)

routes.delete('/ecom/api/products/:id',[verifyToken, isAdmin], deleteProduct)
module.exports = {productRoutes: routes}