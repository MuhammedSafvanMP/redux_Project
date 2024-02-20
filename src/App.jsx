import React from 'react'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Nav from './components/Navbar'

export default function App() {
  return (
    <>
  
    <Nav />
    <Routes>
      <Route  path='/' element={<Products />} />
      <Route  path="cart" element={<Cart />} />
    </Routes>
   
    </>
  )
}
