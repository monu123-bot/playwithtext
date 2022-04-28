import React from 'react'
import { Link } from 'react-router-dom'
export const Nav = () => {
    return (
        <div>
            <nav className="nav bg-dark">
  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  <Link className="nav-link" to="/about">About</Link>
 
  
</nav>
         
        </div>
    )
}
