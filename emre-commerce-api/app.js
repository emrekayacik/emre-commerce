//FUNDAMENTALS
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');
const app = express();

//ROUTES
// const movieRoute = require('./routes/movies/movies');
// const categoryRoute = require('./routes/categories/categories');

//MIDDLEWARES AND ROUTE USES
app.use(bodyParser.json());
app.use(cors());

// app.use('/movies',movieRoute);
// app.use('/categories',categoryRoute);

app.get('/', (req,res) => {
    res.send('HomePage')
});

mongoose.connect(process.env.DB_CONNECTION,
    {useNewUrlParser : true},
    () => {
        console.log('connected to db');
});
app.listen(3000);