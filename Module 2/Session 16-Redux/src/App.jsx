import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCounter } from './components/redux/actions/counter';

export default function App() {
  const counter = useSelector((state)=>{
    return state;
   })
   let dispatch = useDispatch();
   let increaseCount=()=>{
    dispatch(actionCounter(3));
   }
  return (
    <div>
      App
      <p>Count:{counter.counter}</p>
      <button onClick={increaseCount}>increase</button>
    </div>
  )
}
