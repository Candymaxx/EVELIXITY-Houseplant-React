import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../store/cartSlice'

export default function PlantCard({p}){
  const dispatch = useDispatch()
  const inCart = useSelector(s => !!s.cart.items[p.id])
  const handleAdd = () => {
    dispatch(addItem({ id: p.id, name: p.name, salePrice: p.salePrice, thumb: p.thumb }))
  }

  const svg = `<?xml version='1.0' encoding='utf-8'?><svg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'><rect width='100%' height='100%' fill='%23f6f6f4'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%239aae99' font-family='Poppins, sans-serif' font-size='14'>No image</text></svg>`
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

  return (
    <div className="card">
      <img src={encodeURI(p.thumb)} alt={p.name} onError={(e)=>{ e.currentTarget.src = placeholder }} />
      <div className="small">{p.name}</div>
      <div>
        <span className="orig-price">₱{p.origPrice.toLocaleString(undefined,{minimumFractionDigits:2})}</span>
        &nbsp; <span className="price">₱{p.salePrice.toLocaleString(undefined,{minimumFractionDigits:2})}</span>
      </div>
      <button className="add-btn" onClick={handleAdd} disabled={inCart}>
        <span className="material-icons">{inCart ? 'check_circle' : 'add_shopping_cart'}</span>
        {inCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}
