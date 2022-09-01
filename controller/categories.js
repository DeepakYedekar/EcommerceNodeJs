const {Categories}=require('../models');
async function createCategories(req,res){
const {name,description}=req.body;
try{
    const er=await Categories.findOne({
        where:{
            name:name
        }
     });
     if(er){
        res.status(500).send({msg:"Category already exist"});
     }else{
        const result= await Categories.create({name,description});
        if(result){
            res.status(200).send({'msg':'Categories added successfully'});
        }
     }
}catch(err){
console.log(err);
res.status(500).send({msg:"Internal server error"});
}
}


async function getAllCategories(req,res){
    try{
         const result=await Categories.findAll();
         res.send(result);
    }catch(err){
    console.log(err);
    res.status(500).send({msg:"Internal server error"});
    }
}


async function getCategorieById(req,res){
    const CategoryId=req.params.id;
    try{
         const result=await Categories.findOne({
            where:{
                id:CategoryId
            }
         });
         res.send(result);
         
    }catch(err){
    console.log(err);
    res.status(500).send({msg:"Internal server error"});
    }
}

async function getCategorieByName(req,res){
    try{
         const result=await Categories.findOne({
            where:{
                name:req.query.name
            }
         });
         res.send(result);
    }catch(err){
    console.log(err);
    res.status(500).send({msg:"Internal server error"});
    }
}


async function updateCategories(req,res){
    const {categoryId,name,description}=req.body;
    try{
         const result=await Categories.findOne({
            where:{
                id:categoryId
            }
         });
        if(result){
            result.name=name;
            result.description=description;
            result.save();
            res.send({msg:"Category got updated",result})
        }else{
            res.status(400).send({msg:"id does not found"});
        }
         
    }catch(err){
    console.log(err);
    res.status(500).send({msg:"Internal server error"});
    }
}

async function deleteCategory(req,res){
    const id=req.params.id;
    try{
         const result=await Categories.destroy({
            where:{
                id:id
            }
         });
        if(result){
            res.send({msg:"Category got deleted"})
        }else{
            res.send({msg:"Category does not found"})
        }
    }catch(err){
    console.log(err);
    res.status(500).send({msg:"Internal server error"});
    }
}

module.exports={
    createCategories,
    getAllCategories,
    getCategorieById,
    updateCategories,
    deleteCategory,
    getCategorieByName
}