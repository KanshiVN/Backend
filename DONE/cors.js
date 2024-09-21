// when you want to get data from other domain you have to put cors

const express = require('express');
const app = express();
const cors = require('cors');

// app.use(cors());  when we want all routes to be accessible

app.get('/',function(req,res,next){
    res.send('heu');
})

// when you want to share at certain routes
app.get('/sharable',cors(), function(req,res,next){
    res.send("heu2");
})

app.listen(3000);