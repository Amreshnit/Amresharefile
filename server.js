const express = require('express');

const app = express();
//const mongoose = require("mongoose");
const path = require('path');
//const dotenv = require("dotenv");

const cors = require('cors');

//const APP_BASE_URL = process.env.APP_BASE_URL;
const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL;
const PORT = process.env.PORT || 4000;

//connect Database
const connectDB = require('./config/db');
connectDB();

//cors 
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
    // ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:4000']
  }
  
app.use(express.static('public'));
app.use(cors(corsOptions));
//template engine
app.use(express.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


//initialize routes
app.use('/api/files',require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})