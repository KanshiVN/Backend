const express = require("express");

const app = express();

app.use(function(req,res,next){
    console.log("Hello");
    next();
})

// middleware is the funcn which has req,res,next
// Middleware is used when you want to attach someting before arrival of request
// has to be written inside app.use
app.listen(3000);
