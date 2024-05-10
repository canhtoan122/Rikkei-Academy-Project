import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Books from './components/Books.jsx'
import BookDetail from './components/BookDetail.jsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Books></Books>}></Route>
        <Route path='/BookDetail/:id' element={<BookDetail></BookDetail>}></Route>
      </Routes>
    </div>
  )
}
