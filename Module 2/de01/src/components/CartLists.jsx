import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../redux-toolkit/reducers/cartReducer'

export default function CartList() {
    const data = useSelector(state =>{
        return state
    })
    const disPatch = useDispatch();
    const newSoup={
      name: "Súp bí đỏ",
      price: 140000
    }
    const addSoup = () =>{
      disPatch(addItem(newSoup));
    }
    const newSalad={
      name: "Salad Rau",
      price: 100000
    }
    const addSalad = () =>{
      disPatch(addItem(newSalad));
    }
    const newPizza={
      name: "Pizza",
      price: 220000
    }
    const addPizza = () =>{
      disPatch(addItem(newPizza));
    }
  return (
    <div>
      CartList
      <ul>
        <li>Súp bí đỏ 140000 <button type="button" onClick={addSoup}>Add to cart</button></li>
        <li>Salad Rau 100000 <button type="button" onClick={addSalad}>Add to cart</button></li>
        <li>Pizza 220000 <button type="button" onClick={addPizza}>Add to cart</button></li>
      </ul>
      <ul>
        {
          data.cart.map((item, index)=>{
            return <li key={index}>
              {item.name} {item.price}
            </li>
          })
        }
      </ul>
    </div>
  )
}
