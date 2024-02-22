import React from 'react'
import Products from './components/Products'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Nav from './components/Navbar'
import { Provider } from 'react-redux'
import Store from './store/Store'

export default function App() {
  return (
    <>
  <Provider store={Store}>

    <Nav />
    <Routes>
      <Route  path='/' element={<Products />} />
      <Route  path="cart" element={<Cart />} />
    </Routes>
   
  </Provider>
    </>
  )
}
