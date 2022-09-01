const express=require('express');
const controller=require('../controller/products');
const {checkDataForProduct,verifyToken, isAdmin}=require('../Middleware/index');
const routes=express.Router();

routes.post('/ecom/api/products',[checkDataForProduct,verifyToken,isAdmin],controller.createProducts);

routes.get('/ecom/api/products',controller.getAllProducts);

routes.get('/ecom/api/products/filter',controller.getProductBasedOnFilter);

routes.get('/ecom/api/products/:id',controller.getProductsById);

routes.get('/ecom/api/productsq',controller.getProductByName);

routes.patch('/ecom/api/products',[verifyToken,isAdmin],controller.updateProducts);

routes.delete('/ecom/api/products/:id',[verifyToken,isAdmin],controller.deleteProduct);


module.exports={
    ProductsRoutes:routes
}