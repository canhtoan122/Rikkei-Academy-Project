import React from 'react'
import { useReducer } from 'react';

export default function UseReducer() {
    // const initial = 0;
    const reducer=(state, action)=>{
        switch (action){
            case "increase":
                state=state+1
                return state
            case "decrease":
                state=state-1
                return state
            default:
                return state
        }
    }
    const [count, ditPatch] = useReducer(reducer, 0);
    const handleIncrease =() =>{
        ditPatch("increase");
    }
    const handleDecrease =() =>{
        ditPatch("decrease");
    }
  return (
    <>
        UseReducer
        {/* quản lí những state phức tạp 
            bản chất cũng giống như useState nhưng dùng để quản lí các state phức tạp 
            và công dụng sau này học redux.
        */}
        <p>count: {count}</p>
        <p onClick={handleIncrease}><button>tăng</button></p>
        <p onClick={handleDecrease}><button>giảm</button></p>
    </>
  )
}
