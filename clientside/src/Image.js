import React from "react";
import { useState } from "react";

function Image(){

    const[loaded,setLoaded] = useState('');

    function loadedimg(e) {
        const source=URL.createObjectURL(e.target.files[0]);
        console.log(source);
        setLoaded(URL.createObjectURL(e.target.files[0]));
    } 
    return(
        <div id="imges">
        <img src={loaded} alt=""/>
        <h1>picture exported</h1>
        <input type="file" onChange={loadedimg} id="selected"/>
        </div>
    )
}
export default Image;