import React,{forwardRef,useImperativeHandle} from "react";

// forwardRef -> Parent se ref leke child ko provide krega 
// useImperativeHandle -> Ref ke through whi method expose krega jo hmme chahiye 

const Child = forwardRef((props,ref)=>{
    useImperativeHandle(ref,()=>({
        sayHello(){
            console.log("Hello from Child");
        }
    }))
    return <p>I'm IronMan !! </p>
})

export default Child;