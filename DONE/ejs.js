// its a view engine //form handing video 86

const express= require('express')
const app = express();

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/check',function(req,res){
    console.log(req.query);
    res.send("working")
})

app.put('/check',function(req,res){
    console.log(req.query);
    res.send("working")
})

app.post('/check',function(req,res){
    console.log(req.query);
    res.send("working")
})

app.patch('/check',function(req,res){
    console.log(req.query);
    res.send("working")
})


app.listen(3000);
