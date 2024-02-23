import React from 'react'
import {Routes, Route, Link, NavLink} from 'react-router-dom'
import Home from './components/Home'
import Intro from './components/Intro'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Store from './components/Store'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import './App.css'

export default function App() {
  return (
    <>
      App
      <ul>
        <li>
          <NavLink to='/'>Trang Chủ</NavLink>
        </li>
        <li>
          <NavLink to='/intro'>Giới Thiệu</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Liên Hệ</NavLink>
        </li>
        <li>
          <NavLink to='/product'>Danh sách sản phẩm</NavLink>
        </li>
      </ul>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/intro' element={<Intro></Intro>}>
        <Route path='store' element={<Store></Store>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/product/:productId' element={<ProductDetail></ProductDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}
