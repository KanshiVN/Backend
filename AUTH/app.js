import cookieParser from 'cookie-parser';
import express from 'express';
const app = express();
import bcrypt from 'bcrypt';
import userModel from './models/userModel.js';

// Use cookie-parser middleware
app.use(cookieParser());

// Route to set a cookie


// Route to read the cookie
app.get('/', (req, res) => {
   bcrypt.genSalt(10,function (err, salt){
    bcrypt.hash('mypassword',salt,function(err,hash){
        res.send(`Your password is : ${hash}`);
    })
   })
});


// Start the server
app.listen(3000, () => {
   console.log('Server running on port 3000');
});
