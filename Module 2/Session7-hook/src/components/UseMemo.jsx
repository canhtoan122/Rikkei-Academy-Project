import React from 'react'
import { useMemo } from 'react';
import { useState } from 'react'

export default function UseMemo() {
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [quantity,setQuantity]=useState("");
    const [cart, setPay]=useState([]);
    const addToCart = () =>{
        setPay([...cart, {
            name: name,
            price: price,
            quantity: quantity,
        }]);
    }
    // let result = useMemo(() => {cart.reduce((accumulator, item) => {
    //     return accumulator+item.price*item.quantity;
    // }, 0)
    // return pay
    // }, [cart]);
  return (
    <>
        UseMemo
        {/*
            Cho 3 ô input người dùng sẽ nhập giá trị tên, giá, số lượng sản phẩm
            sau đó sẽ in ra tổng hóa đơn người dùng mua 
         */}
         <label htmlFor="">nhập tên</label>
         <input type="name" onChange={(event)=> setName(event.target.value)}/><br />
         <label htmlFor="">nhập giá</label>
         <input type="price" onChange={(event)=> setPrice(event.target.value)}/><br />
         <label htmlFor="">nhập số lượng sản phẩm</label>
         <input type="quantity" onChange={(event)=> setQuantity(event.target.value)}/><br />
         <button onClick={addToCart}>mua</button>
         {/*
            Các bước làm
            Bước 1: Dùng onChange để lấy ra các giá trị 
            Bước 2: Lưu vào state là 1 cái mảng để chứa các object 
            Bước 3: Dùng hàm để tính
            Bước 4: Hiển thị kết quả
          */}
    </>
  )
}
