import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
const app = express();
import { fileURLToPath } from 'url';
import userModel from './models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.get('/', (req, res) => {
    res.render('index');
})

app.post('/create',  (req, res) => {
    let {userName,email,age,password} = req.body;

    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(password,salt, async (err,hash)=>{
            let createdUser = await userModel.create({
                userName,
                email,
                age,
                password:hash
            });

            let token = jwt.sign({email},"123");
            res.cookie('token',token);
            res.send(createdUser);
        })
    });

   
   
})

app.get('/logout',(req, res) => {
    res.cookie('token',"");
    res.redirect('/');
})

app.get('/login', async (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    let {email, password} = req.body;
    let user = await userModel.findOne({email});
    if(!user){
        res.send('Something went wrong');
    }
    bcrypt.compare(password, user.password,(err,result) => {
       if(result)res.send('You can login')
        res.send('something went wrong');
        
    });
})

app.listen(3000);