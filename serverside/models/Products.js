import mongoose from "mongoose";

const ProductSchema =new mongoose.Schema({
    img:{type:String,required:true},
    cat:{type:String,required:true},
    model:{type:String,required:true},
    price:{type:Number,required:true},
    phno:{type:Number,required:true},
    des:{type:String,required:true},
    loc:{type:String,required:true},
    id:{type:String,required:true},
});

export const ProductModel=mongoose.model("products",ProductSchema);