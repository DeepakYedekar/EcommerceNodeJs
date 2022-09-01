const express = require('express')
const {updateCart, getCart} = require('../controller/cart')
const {verifyToken} = require('../middleware')
const routes = express.Router()



routes.put('/ecom/api/carts/:id',[verifyToken], updateCart)

routes.get('/ecom/api/carts/:id',[verifyToken], getCart)

module.exports = {cartRoutes : routes}