import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing(){
  return (
    <div className="landing" style={{ backgroundImage: `url(/images/bg.jpg)` }}>
      <div className="content">
        <h1>EVELIXITY</h1>
        <p>
          EVELIXITY offers a curated selection of exquisite houseplants<br />
          designed to breathe life and calm into<br />
          your space. Transform your home with timeless greenery from EVELIXITY
        </p>
        <Link to="/products">
          <button className="btn-glass">
            <span className="material-icons">eco</span>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  )
}
