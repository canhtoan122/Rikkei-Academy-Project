import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const student = ["1", "2", "3", "4"];
  return (
    <>
      <h1>App</h1>
      <ul>
          {
            student.map((item,index)=>{
              return <li key={index}>{item}</li>
            })
          }
      </ul>
    </>
  )
}

export default App
