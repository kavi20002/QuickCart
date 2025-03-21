const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT | 3000 ;

const BookmarkRoute = require('./route/BookmarkRoute');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/quick_cart_db').then(() => {
    console.log('database connected');
}).catch((e) => {
    console.log(e);
});

app.use('api/v1/bookmarks', BookmarkRoute);

app.listen(PORT, ()=> {
    console.log(`server up & running on port ${PORT}`);
})

