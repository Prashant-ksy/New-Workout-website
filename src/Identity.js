import { useState } from "react";

const Identity = ({setToken}) => {

    const trueToken= ()=>{
        setToken("aaaaaa");
    }
    

    return ( 
        <div className="identity">
            <h1>This is Identity.</h1>
            <button onClick={trueToken}>Click to ientify</button>
        </div>
     );
}
 
export default Identity;