const express = require('express');
const app = express();
const expressSession = require('express-session');
const flash = require('connect-flash');

app.use(expressSession({
    resave:false,
    saveUninitialized:false,
    secret:"anything"
}));

app.use(flash());

app.get('/',function(req,res,next){
        req.flash('error',"invalid credentials"); //message
        res.redirect('/error');//redirect to /error route
    
})

app.get('/error',function(req,res,next){
   let message = req.flash('error');
   res.send(message);
})

app.listen(3000);