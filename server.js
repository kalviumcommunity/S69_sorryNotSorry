const express = require ('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
let check = false;

mongoose.connect(process.env.db_ur)
.then(() => {console.log('connected to db'); 
    check = true; })
.catch(err => console.log(err));


app.get("/",(req,res)=>{
    if(check){
        res.send("connected to db");
    }else{
        res.send("Error occured");
    }
   

})

app.get("/ping",(req,res)=>{
    res.send("Pong");
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})
