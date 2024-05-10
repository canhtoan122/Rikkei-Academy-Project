import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Books from './components/Books.jsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Books></Books>}></Route>
      </Routes>
    </div>
  )
}
