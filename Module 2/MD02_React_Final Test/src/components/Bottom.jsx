import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addJob } from '../redux-toolkit/reducer/todoReducer'
let idCounter = 0;

function generateId() {
  idCounter++;
  return idCounter;
}
export default function Bottom() {
  const [todo, setTodo] = useState({ id: '',status: false, name: '' });
  const disPatch = useDispatch();
  
  const addRedux=()=>{
    const newJob = {
      ...todo,
      id: generateId(),
      status: false,
    };
    disPatch(addJob(newJob));
    setTodo({ id: '', name: '' });
  }
  const handleChangeItem = (e) =>{
    setTodo({ ...todo, name: e.target.value });
  }
  return (
    <div>
        <h1>Add to the todo list</h1>
        <input type="text" value={todo.name} onChange={handleChangeItem}/>
        <button onClick={addRedux}>ADD ITEM</button>
    </div>
  )
}
