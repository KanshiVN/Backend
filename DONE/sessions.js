// cookies-> store data in browser
// sessions=> store data in server
const express = require('express');
const app = express();
const expressSession = require('express-session');

app.use(expressSession({
    secret:"Random",
    resave:false,
    saveUninitialized:false
    //sesion
}))

app.get('/',function(req,res,next){
    res.send("Hellow")
})

app.get('/create',function(req,res,next){
    req.session.sessionName = true;
    res.send('done');
})

app.listen(3000);