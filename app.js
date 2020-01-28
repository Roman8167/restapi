const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/";
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(url,{ useNewUrlParser: true },function(err,db){
    if(err) throw err;
    console.log("Database is up and running")
});
app.get("/",function(req,res){
    res.send("Welcome to the home page");
});
const postRoute = require("./routes/post");
app.use("/post",postRoute);
app.listen(3000,()=>{
    console.log("Server is up and running")
})