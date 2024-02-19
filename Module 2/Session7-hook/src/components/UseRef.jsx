import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function UseRef() {
    const [count, setCount]= useState(0);
    const ref = useRef(0);
    // trả về object trong object có 1 thuộc tính mặc định là current
    const obj ={
        count:0,
    }
    const handleIncrease = () => {
        obj.count=obj.count+1;
        console.log(obj.count);
        ref.current = ref.current + 1;
        setCount(count+1);
    }
    useEffect(()=>{
        ref.current.focus();
    },[])
  return (
    <>
        UseRef
        {/* <p>count: {ref.current}</p> */}
        <br />
        <button onClick={handleIncrease}>click</button>
        <input type="text" ref={ref} />
    </>
  )
}
