import {UserModel} from '../model/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';


//handling users authentication
export const signUp = async(req,res)=>{
  console.log(req.body.name);
    try {
        const existingUser = await UserModel.findOne({email:req.body.email});
        if(existingUser){
            console.log(existingUser);
       return res.status(400).send('user already exists');
        }
        //hashing user's password 
        const hashedPassword = await bcrypt.hash(req.body.password,8);
        const user =  new UserModel({name:req.body.name,email:req.body.email,password:hashedPassword});
        await user.save();
        console.log('user created sucessfully');
        const token = jwt.sign({email:req.body.email},process.env.SECRET_KEY);
       return  res.status(201).json({token});
        
    } catch (error) {
        console.log(error.message);
       return res.status(500).send(error.message);  
    }
}

export const login = async (req,res)=>{
    try {
   
     
      const userr = await UserModel.findOne({email:req.body.email});
      if(!userr){
        return  res.status(403).send('no such user exists');
      }
      console.log('user found');
      //comparing hashed password
      const result = await bcrypt.compare(req.body.password,userr.password);
      console.log('result is ',result);
      
      if(result==true){
        const token = jwt.sign({email:req.body.email},process.env.SECRET_KEY);
       return res.status(200).json({token:token});
      }
      else{
        return res.status(403).send('wrong credentials');
      }
    } catch (error) {
        console.log(error.message);
        res.status(500).send(error.message);
    }
}