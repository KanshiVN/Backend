const express = require("express");
const app = express();

app.use(function(req,res,next){
    console.log("Hello");
    next();
})

app.get('/',function(req,res){
    res.send('Hello world');
})

app.get('/about',function(req,res){
    res.send("Hello 2 about");
})

app.get('*',function(req,res){
    res.send("There is no page like this");
})
// middleware is the funcn which has req,res,next
// Middleware is used when you want to attach someting before arrival of request
// has to be written inside app.use
app.listen(3000);