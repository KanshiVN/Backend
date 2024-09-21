const express = require("express");
const app = express();

app.get('/profile/:username',function(req,res,next){
    res.send(req.params.username + 's page') 
})
// profile ke baad :username hai wo dynamic hai wo kuch bhi ho sakta hai
app.get('/autHor/:username/:age',function(req,res,next){
    res.send(`${req.params.username} is of ${req.params.age} its his page`) 
})


app.listen(3000);