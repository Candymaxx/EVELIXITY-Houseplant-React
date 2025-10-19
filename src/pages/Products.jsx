import React from 'react'
import products from '../data/products'
import PlantCard from '../components/PlantCard'

export default function Products(){
  const cats = ['Tall','Medium','Small']
  return (
    <main className="container">
      <div className="products-header">
        <h1 className="products-title">Our Collection</h1>
        <p className="products-subtitle">Discover beautiful houseplants for every space</p>
      </div>
      {cats.map(cat=> (
        <section key={cat} className="category">
          <h3 className="section-title">{cat}</h3>
          <div className="products-grid">
            {products.filter(p=>p.category===cat).map(p=> <PlantCard key={p.id} p={p} />)}
          </div>
        </section>
      ))}
    </main>
  )
}
