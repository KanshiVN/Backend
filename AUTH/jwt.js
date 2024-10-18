import express from 'express';
import jwt from 'jsonwebtoken'
const app = express();
import cookieParser from 'cookie-parser';

app.use(cookieParser());
app.get('/',(req,res)=>{
 
    let token = jwt.sign({email:'test@example.com'},'secret')
    res.cookie('token',token);
    res.send('hii')
})

app.get('/read',(req,res)=>{
    console.log(req.cookies.token);
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send('read')
})

app.listen(2000, () => {
    console.log('Server running on port 2000');
 });
  