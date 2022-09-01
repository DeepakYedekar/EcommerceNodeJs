const {User,Role}=require('../models');


async function  checkDuplicateUser(req,res,next){
    if(req.body.username){
        const result=await User.findOne({
            where:{
                username:req.body.username
            }
        })
        if(result){
            res.send('Username already exist');
            return;
        }
    }
    if(req.body.email){
        const result=await User.findOne({
            where:{
                email:req.body.email
            }
        })
        if(result){
            res.send('email already exist');
            return;
        }
    }
    next();
}

async function  checkRoles(req,res,next){
    if(req.body.roles){
       let roles=req.body.roles;
       let flag=true;
       const findRoleFromDB=await Role.findAll({
        attributes:['id']
       })
       if(findRoleFromDB.length>0){
        const storeRole=[];
        for(let i=0;i<findRoleFromDB.length;i++){
            storeRole.push(findRoleFromDB[i].dataValues.id)
        }
        for(let i=0;i<roles.length;i++){
            const result=storeRole.includes(roles[i]);
            if(!result){
                flag=false;
                break;
            }
        }
        if(flag){
            next()
        }else{
            res.status(400).send({msg :'Role id does not exist'})
            return;
        }
       }
    }
}

module.exports={
    checkDuplicateUser,
    checkRoles
}