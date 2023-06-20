import React from "react";
import Addproducts from "./pages/Addproducts";
import './App.css';
//import Show from "./pages/Show";
import {motion} from "framer-motion";
export default function Combine(){
    return(
        <motion.div className="combine"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth,transistion:{duration:2}}}
        >
        <div className="display">
        <Addproducts/>
        </div>
        </motion.div>
    )
}