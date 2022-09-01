const {checkDataForCategories}=require('./categories');
const {checkDataForProduct}=require('../Middleware/products');
const {verifyToken,isAdmin}=require('./authJWT');
module.exports={
    checkDataForCategories,
    checkDataForProduct,
    verifyToken,
    isAdmin
}