import mongoose from "mongoose";

mongoose.connect('mongodb://127.0.0.1:27017/authtestapp')

const userSchema = new mongoose.Schema({
    userName:String,
    password:String,
    email:String,
    age:Number
});
 const User = mongoose.model('User', userSchema);

export default User;