import express from 'express'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router =express.Router();

import { UserModel } from '../models/Users.js';

router.post("/register",async (req,res)=>{
    const{username,password}=req.body;
    const user=await UserModel.findOne({username});
    if(user){
        return res.send({message:"USER ALREADY EXISTS"});
    }
    const hashed=await bcrypt.hash(password,10);
    const newUser=new UserModel({username,password:hashed});
    await newUser.save();
    res.send({message:"USER REGISTER SUCCESSFULLY"});
});

router.post("/login",async(req, res)=>{
    const{username,password}=req.body;
    const user=await UserModel.findOne({username});
    if(!user){
        return res.send({message:"USER NOT FOUND"});
    }
    const isPasswordValid=await bcrypt.compare(password,user.password);  
    if(!isPasswordValid){
        return res.send({message:"USERNAME/PASSWORD INCORRECT"});
    }
    const token =jwt.sign({id:user._id},"secret");
    res.json({token,userID:user._id});
})

router.get("/admin",async(req,res)=>{

    try{
        const users = await UserModel.find({});
        if(users){
        res.json(users);
        }
        else{
          res.send({message: 'user not found'});
        }
        }catch(err){
          res.json(err);
        }
        }
);

router.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id;
    await UserModel.findByIdAndRemove(id).exec();
    res.send("user deleted");
})

export {router as userRouter};