import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ProductModel } from './models/Products.js';
import {userRouter} from "./routes/users.js";
import { productsRouter } from './routes/products.js';
const app=express();

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/products",productsRouter);

mongoose.connect(
  "mongodb://localhost:27017/ProductReselling",
  {useNewUrlParser: true}
  );

  app.listen(3001,()=>{
   console.log("server started")
  });