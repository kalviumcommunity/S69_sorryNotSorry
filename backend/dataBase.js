const mongoose = require("mongoose");
require('dotenv').config();
const url = process.env.db_url;

const connectDB = ()=>{
    mongoose.connect(url)
    .then(()=>{
        console.log("Connected to MongoDB");
    
    })
    .catch((err)=>{
        console.log(err);
        })
}

module.exports = connectDB;