const express=require('express');
const controller=require('../controller/categories');
const {checkDataForCategories, verifyToken, isAdmin}=require('../Middleware/index');
const routes=express.Router();

routes.post('/ecom/api/categories',[checkDataForCategories,verifyToken,isAdmin],controller.createCategories);

routes.get('/ecom/api/categories',controller.getAllCategories);

routes.get('/ecom/api/categories/:id',controller.getCategorieById);

routes.get('/ecom/api/categoriesq',controller.getCategorieByName);

routes.patch('/ecom/api/categories',[verifyToken,isAdmin],controller.updateCategories);

routes.delete('/ecom/api/categories/:id',[verifyToken,isAdmin],controller.deleteCategory);


module.exports={
    categoriresRoutes:routes
}