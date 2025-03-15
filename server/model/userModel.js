import mongoose from "mongoose";



const userSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,required:true,default:'user'}
});

export const UserModel = mongoose.model('UserModel',userSchema);

