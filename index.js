const {serverPort} = require('./config/server.config')
const express = require('express')
const { Categories, sequelize, Products, Role } = require('./models')
const {categoryRoutes, productRoutes, authRoutes, cartRoutes} = require('./routes')
const app = express()

app.use(express.json())
app.use(authRoutes)
app.use(categoryRoutes)
app.use(productRoutes)
app.use(cartRoutes)

app.listen(serverPort,async ()=>{
    console.log(`server started on port ${serverPort}`);
    await sequelize.sync({force:true});
   await init();
});  



async function init(){

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

await Categories.bulkCreate(cat);
await Products.bulkCreate(pro);
await Role.bulkCreate(defaultRole);
await User.bulkCreate(UserRole);
}