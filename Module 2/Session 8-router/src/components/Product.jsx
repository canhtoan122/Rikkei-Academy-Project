import React from 'react'
import { useNavigate } from 'react-router-dom';
let product=[
    {
        id:1,
        name:"iphone1",
    },
    {
        id:2,
        name:"iphone2",
    },
    {
        id:3,
        name:"iphone3",
    }
]
export default function Product() {
    let useNavi = useNavigate();
    let handleClick=(id)=>{
        console.log("111", id);
        useNavi(`/product/${id}`);
    }
  return (
    <>
        Danh sách sản phẩm
        <ul>
            {product.map((item)=>{
                return <li key={item.id}>{item.name} <button onClick={()=>handleClick(item.id)}>click</button></li>
            })}
        </ul>
    </>
  )
}
