const express=require('express');
const {serverPort}=require('./config/server.config');
const {categoriresRoutes,ProductsRoutes,AuthRoutes,CartRoutes}=require('./routes');
const {sequelize,Categories,Products,Role,User}=require('./models');
require('dotenv').config();
const app=express();

app.use(express.json());
app.use(categoriresRoutes);
app.use(ProductsRoutes);
app.use(AuthRoutes);
app.use(CartRoutes);




app.listen(serverPort,async ()=>{
    console.log(`server started on port ${serverPort}`);
    // sequelize.sync({force:true}); //Entire table data got deleted
//    await init();
});  



async function init(){
await sequelize.sync({force:true});

let cat=[
    {
        name:"Shade",
        description:"About Shade"
    },
    {
        name:"Home",
        description:"About Home"
    },
    {
        name:"Park",
        description:"About Park"
    }
]

let pro=[
    {
        name:"bag",
        description:"Mens & Womens Shoes",
        cost:"600",
        quantity:"100",
        CategoryId:"1"
    },
    {
        name:"necles",
        description:"Mens & Womens Shoes",
        cost:"600",
        quantity:"100",
        CategoryId:"1"
    },
    {
        name:"HairBands",
        description:"Mens & Womens Shoes",
        cost:"600",
        quantity:"100",
        CategoryId:"1"
    },
    {
        name:"Trimmer",
        description:"Mens & Womens Shoes",
        cost:"600",
        quantity:"100",
        CategoryId:"1"
    }
]

let defaultRole=[
    {
        name:"User"
    },
    {
        name:"Admin"
    }
]

let UserRole=[
    {
        "username":"abc123",
         "password":"abc123",
         "email":"abc123@gmail.com",
         "roles":[1,2]
     
     }
]

Categories.bulkCreate(cat);
Products.bulkCreate(pro);
Role.bulkCreate(defaultRole);
User.bulkCreate(UserRole);
}