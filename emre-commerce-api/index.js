const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');
const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');


dotenv.config();

mongoose
.connect(
    process.env.CS
)
.then(()=>console.log('Db Connection Established'))
.catch((err)=>console.log(err));

app.use(express.json());


app.use("/api/users",userRoute);
app.use("/api/home",homeRoute);
app.use("/api/auth",authRoute);
app.use("/api/products",productRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);



app.listen(process.env.PORT || 5000,()=>{
    console.log('The App is Running...')
});