const {Products, Sequelize}=require('../models');
async function createProducts(req,res){
    const {name,description,cost,quantity,CategoryId}=req.body;
    try{
        const er=await Products.findOne({
            where:{
                name :name
            }
         });
         if(er){
            res.status(500).send({msg:"Product already exist"});
         }else{
            const result= await Products.create({name,description,cost,quantity,CategoryId});
            if(result){
                res.status(200).send({'msg':'Product added successfully'});
            }
         }
    }catch(err){
    console.log(err);
    res.status(500).send({msg:"Internal server error"});
    }
    }
    
    
    async function getAllProducts(req,res){
        try{
             const result=await Products.findAll();
             res.send(result);
        }catch(err){
        console.log(err);
        res.status(500).send({msg:"Internal server error"});
        }
    }
    
    
    async function getProductsById(req,res){
        const ProductId=req.params.id;
        try{
             const result=await Products.findOne({
                where:{
                    id:ProductId
                }
             });
             if(result){
                res.send(result);
             }else{
                res.send("Id not found");
             }     
        }catch(err){
        console.log(err);
        res.status(500).send({msg:"Internal server error"});
        }
    }
    
    async function getProductByName(req,res){
        try{
             const result=await Products.findOne({
                where:{
                    name:req.query.name
                }
             });
             if(result){
                res.send(result);
             }else{
                res.send("Product not found");
             } 
        }catch(err){
        console.log(err);
        res.status(500).send({msg:"Internal server error"});
        }
    }
    
    
    async function updateProducts(req,res){
        const {ProductId,name,description,cost,quantity,CategoryId}=req.body;
        try{
             const result=await Products.findOne({
                where:{
                    id:ProductId
                }
             });
            if(result){
                result.name=name;
                result.description=description;
                result.cost=cost;
                result.quantity=quantity;
                result.CategoryId=CategoryId;
                result.save();
                res.send({msg:"Product got updated",result})
            }else{
                res.status(400).send({msg:"Product does not found"});
            }
             
        }catch(err){
        console.log(err);
        res.status(500).send({msg:"Internal server error"});
        }
    }
    
    async function deleteProduct(req,res){
        const id=req.params.id;
        try{
             const result=await Products.destroy({
                where:{
                    id:id
                }
             });
            if(result){
                res.send({msg:"Products got deleted"})
            }else{
                res.send({msg:"Products does not found"})
            }
        }catch(err){
        console.log(err);
        res.status(500).send({msg:"Internal server error"});
        }
    }

async function getProductBasedOnFilter(req,res){
    const CategoryId=req.query.CategoryId;
    const name=req.query.name;
    const maxCost=req.query.maxCost;
    const minCost=req.query.minCost;

    if(CategoryId){
        const result=await Products.findOne({
            where:{
                id:CategoryId
            }
        })
        res.send(result);
    }
    if(name){
        const result=await Products.findOne({
            where:{
                name:name
            }
        })
        res.send(result);
    }

    if(minCost && maxCost){
        const result=await Products.findAll({
            where:{
               cost :{
                [Sequelize.Op.gte]: minCost,
                [Sequelize.Op.lte]: maxCost
               }
            }
        })
        res.send(result);
    }else if(minCost){
        const result=await Products.findAll({
            where:{
               cost :{
                [Sequelize.Op.lte]: minCost
               }
            }
        })
        res.send(result);

    }else if(maxCost){
        const result=await Products.findAll({
            where:{
               cost :{
                [Sequelize.Op.lte]: maxCost
               }
            }
        })
        res.send(result);
    }else{
        const result=await  Products.findAll();
        res.send(result);
    }
}

module.exports={
    createProducts,
    getAllProducts,
    getProductsById,
    getProductByName,
    updateProducts,
    deleteProduct,
    getProductBasedOnFilter
}