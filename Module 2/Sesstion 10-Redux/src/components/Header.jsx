import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

export default function Header() {
    /*
        lấy dữ liệu từ trong kho ra dùng useSelector
        Khi muốn cập nhật state mới thì dùng useDispatch
    */
//    let data = useSelector((state)=>{
//     return state.countReducer;
//    })
   let data = useSelector((state)=>{
    return state;
   })
   let dispatch = useDispatch();
   let increaseCount=()=>{
    dispatch({
        type:"increase"
    });
   }
   let decreaseCount=()=>{
    dispatch({
        type:"decrease"
    });
   }
  return (
    <div>
        Header
        <p>Count:{data.countReducer}</p>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}
