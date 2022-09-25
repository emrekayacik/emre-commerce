const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const userRoute = require('./routes/user');
const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
.connect(
    process.env.CS
)
.then(()=>console.log('db connection success'))
.catch((err)=>console.log(err));

app.use(express.json());


app.use("/api/users",userRoute);
app.use("/api/home",homeRoute);
app.use("/api/auth",authRoute);



app.listen(process.env.PORT || 5000,()=>{
    console.log('ssq')
});