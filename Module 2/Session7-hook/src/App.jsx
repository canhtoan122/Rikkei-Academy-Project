import React from 'react'
import UseRef from './components/UseRef'
import UseReducer from './components/UseReducer'
import UseCallback from './components/UseCallback'
import UseMemo from './components/UseMemo'
import { useState } from 'react'
import { useCallback } from 'react'

export default function App() {
  const [count, setCount] = useState(0);
  const handleClick =()=>{
    setCount(count+1);
  }
  const useCallback1 =useCallback(()=>{
    console.log("11111");
  },[count]);
  return (
    <>
      App
      <br />
      <UseRef></UseRef>
      <br />
      ----------------
      <br />
      <UseReducer></UseReducer>
      <br />
      <UseCallback memo={useCallback1}></UseCallback>
      <br />
      <button onClick={handleClick}>click</button>
      ----------------
      <br />
      <UseMemo></UseMemo>
    </>
  )
}
