import React from 'react'
import Login from './components/Login'
import Register from './components/Register'
import { Routes, Route } from 'react-router'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  )
}