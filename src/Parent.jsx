import React,{useRef} from "react";
import Child from "./Child";

function Parent(){
    const childRef=useRef();
    const handleClick = () =>{
        childRef.current.sayHello();
    }
    return(
     <div>
        <Child ref={childRef}/>
        <button onClick={handleClick}>Call Child</button>
     </div>
    )
}

export default Parent;