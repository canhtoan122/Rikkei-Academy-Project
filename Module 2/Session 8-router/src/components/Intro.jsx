import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function Intro() {
  const useNavigate111=useNavigate();
  const handleClick=()=>{
    console.log("1111");
    useNavigate111("/");
    // khi muốn chuyển trang dùng useNavigate
  }
  return (
    <div>
      Intro
      <button onClick={handleClick}>click comeback home</button>
      <Outlet></Outlet>
    </div>
  )
}
