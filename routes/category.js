const express = require('express')
const {createCategory, getAllCategory,
getCategoryOnId, updateCategory, deleteCategory} = require('../controller/category')

const { checkNameForCategory, verifyToken, isAdmin } = require('../middleware')

const routes = express.Router()


routes.post('/ecom/api/categories',[checkNameForCategory, verifyToken, isAdmin],createCategory)

routes.get('/ecom/api/categories',getAllCategory)

routes.get('/ecom/api/categories/:id', getCategoryOnId)

routes.put('/ecom/api/categories/:id',[verifyToken, isAdmin], updateCategory)

routes.delete('/ecom/api/categories/:id',[verifyToken, isAdmin], deleteCategory)

module.exports = {categoryRoutes : routes}