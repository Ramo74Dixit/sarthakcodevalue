import React from "react";

import { useDispatch } from "react-redux";

import { addToCart } from "../redux/cartActions";

const products=[
    {id:1,name:"Iphone",price:500},
    {id:2,name:"Bag",price:100},
    {id:3,name:"Mouse",price:200},
    {id:4,name:"Ipen",price:900},
    {id:5,name:"Charas",price:300},
]

const ProuctList = () =>{
    const dispatch= useDispatch();
    return(
        <div>
         <h2>Products</h2>
      {
        products.map((product)=>(
            <li key={product.id}><span>{product.name}-{product.price}</span><button onClick={()=>dispatch(addToCart(product))}>add to Cart</button></li>
        ))
      }
        </div>
      
    )
}

export default ProuctList
