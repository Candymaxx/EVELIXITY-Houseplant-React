import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Header from './components/Header'

export default function App(){
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={
          <>
            <Header />
            <Products />
          </>
        } />
        <Route path="/cart" element={
          <>
            <Header />
            <Cart />
          </>
        } />
      </Routes>
    </div>
  )
}
