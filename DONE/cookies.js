const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get('/',function(req,res,next){
    console.log("Hello");

})
app.get('/check',function(req,res,next){
    console.log(req.cookie.banned)
    res.send('checking')

})


app.get('/banned',function(req,res,next){
    res.cookie('banned','true');
    res.send('banned');
})

app.listen(3000);