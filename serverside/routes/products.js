import express from 'express';
import mongoose from 'mongoose';
import {ProductModel}from '../models/Products.js';

const router =express.Router();

router.get('/',async(req,res)=>{
   try{
    const product = await ProductModel.find({});
    if(product){
    res.json(product);
    }
    else{
      res.send({message: 'Product not found'});
    }
    }catch(err){
      res.json(err);
    }
    });

router.post("/",async (req,res)=>{
    const{img,cat,model,price,phno,des,loc,id}=req.body;
    const product=new ProductModel({
      img:img,
      cat:cat,
      model:model,
      price:price,
      phno:phno,
      des:des,
      loc:loc,
      id:id,
    });
    await product.save();
    res.send({message:"PRODUCT ADDED"});
  });  


router.get('/:id', async(req, res) => {
   const {id}=req.params;
   res.json(await ProductModel.findById(id));
})

router.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id;
    await ProductModel.findByIdAndRemove(id).exec();
    res.send("product deleted");
})

export {router as productsRouter};
