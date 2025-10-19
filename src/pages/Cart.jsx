import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease, removeItem } from '../store/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart(){
  const items = useSelector(s => Object.values(s.cart.items))
  const totalCount = useSelector(s => s.cart.totalCount)
  const totalPrice = useSelector(s => s.cart.totalPrice)
  const dispatch = useDispatch()

  const svg = `<?xml version='1.0' encoding='utf-8'?><svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'><rect width='100%' height='100%' fill='%23f6f6f4'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239aae99' font-family='Poppins, sans-serif' font-size='10'>No image</text></svg>`
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div className="cart-container">
      <main className="container">
        <h2 className="cart-title">Shopping Cart</h2>
        <div className="cart-totals">
        <p>Total items: <span className="value">{totalCount}</span></p>
        <p>Total cost: <span className="value">₱{totalPrice.toLocaleString(undefined,{minimumFractionDigits:2})}</span></p>
      </div>

      <div className="cart-list">
        {items.length===0 && <div>Your cart is empty.</div>}
        {items.map(it=> (
          <div key={it.id} className="cart-item">
            <img src={encodeURI(it.thumb)} alt={it.name} onError={(e)=>{ e.currentTarget.src = placeholder }} />
            <div style={{flex:1}}>
              <div style={{fontWeight:700}}>{it.name}</div>
              <div className="small">Unit: ₱{it.salePrice.toLocaleString(undefined,{minimumFractionDigits:2})}</div>
            </div>
            <div className="qty-controls">
              <button onClick={()=>dispatch(increase(it.id))}><span className="material-icons">add</span></button>
              <div style={{display:'inline-block',padding:'0 8px',fontWeight:600}}>{it.qty}</div>
              <button onClick={()=>dispatch(decrease(it.id))}><span className="material-icons">remove</span></button>
            </div>
            <div style={{marginLeft:12}}>
              <button className="btn-delete" onClick={()=>dispatch(removeItem(it.id))}>
                <span className="material-icons">delete</span>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="btn-checkout" onClick={()=>alert('Coming Soon')}>
          <span className="material-icons">shopping_bag</span>
          Checkout
        </button>
        <Link to="/products">
          <button className="btn-continue">
            <span className="material-icons">arrow_back</span>
            Continue Shopping
          </button>
        </Link>
      </div>
    </main>
    </div>
  )
}
