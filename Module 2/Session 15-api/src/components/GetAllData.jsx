import React, { useEffect } from 'react'
import axios from "axios"

export default function GetAllData() {
    // chưa có hook, reactjs chỉ dùng class bắt buộc nắm vòng đời
    useEffect(()=>{
        axios.get("http://localhost:8000/users")
        .then(res=>{
            console.log("data", res);
        })
    },[])
  return (
    <div>GetAllData</div>
  )
}
