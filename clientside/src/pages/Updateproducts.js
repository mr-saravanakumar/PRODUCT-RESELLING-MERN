import React from "react";
import './Update.css';
import Display from "./Display";
import {motion} from "framer-motion";
export default function Updateproduct(){
    return(
        <>
        <motion.div id="container-update"
        initial={{width:0}}
        animate={{width:"100%"}}
        exit={{x:window.innerWidth,transistion:{duration:0.1}}}
        >
        <div>
         <Display/>
         </div>
         </motion.div>
        </>
    )
}