import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header(){
  const total = useSelector(state => state.cart.totalCount)
  return (
    <header className="header">
      <Link to="/" className="brand">EVELIXITY</Link>
      <nav>
        <Link to="/products">
          <span className="material-icons">local_florist</span>
          Products
        </Link>
        <Link to="/cart">
          <span className="material-icons">shopping_cart</span>
          Cart ({total})
        </Link>
      </nav>
    </header>
  )
}
