const express = require ('express');
const app = express();


app.get("/",(req,res)=>{
    res.send("Hello, welcome to my ASAP Project");
})

app.get("/ping",(req,res)=>{
    res.send("Pong");
})

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})
