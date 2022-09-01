const express=require('express');
const controller=require('../controller/Auth');
const {checkDuplicateUser, checkRoles}=require('../Middleware/user');
const routes=express.Router();

routes.post('/ecom/api/auth/signup',[checkDuplicateUser,checkRoles],controller.signUp);

routes.post('/ecom/api/auth/signin',controller.signIn);

module.exports={
    AuthRoutes:routes
}