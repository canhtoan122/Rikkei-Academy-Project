import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './redux-toolkit/reducers/counters'
import { addJob } from './redux-toolkit/reducers/todolists'

export default function App() {
  const count = useSelector((state)=>{
    return state
  })
  const disPatch = useDispatch();
  const increaseCount = () =>{
    disPatch(increment())
  }
  const addToDo = () =>{
    let newJob={
      id:5,
      name:"học lập trình"
    }
    disPatch(addJob(newJob));
  }
  console.log(count);
  return (
    <div>
      REDUX TOOLKIT
      <p>{count.counter.value}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={addToDo}>Thêm jobs</button>
      <ul>
        {
          count.todolist.map((item, index)=>{
            return <li key={index}>
              {item.name}
            </li>
          })
        }
      </ul>
    </div>
  )
}
