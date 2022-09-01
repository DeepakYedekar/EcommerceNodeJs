async function checkDataForCategories(req,res,next){
    const {name,description}=req.body;
    if(!name || !description){
        res.status(200).send({'msg':'Data is not provided'});
        return;
    }
    next();
}

module.exports={
    checkDataForCategories,
}