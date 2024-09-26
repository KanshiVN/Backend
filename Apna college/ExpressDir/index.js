const express = require("express");
const app = express();
const instaData = require("./data.json");

let port = 3000;


app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render('home.ejs')
})
app.get('/rolldice',(req,res)=>{
    let diceVal = Math.floor(Math.random() * 6 ) + 1 ;
    res.render('rolldice.ejs',{num:diceVal});
})

app.get('/ig/:name',(req,res)=>{
    let {name} = req.params;
    const data = instaData[name];
    res.render('instaejs.ejs',{data});
})


app.listen(port,()=>{
    console.log(`listening at port ${port}`)
   
})

