import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"


function NavBar() {
  return (
    <header className="encab">
        <NavLink to="/" className = "link"><h1>NOVOSITA</h1></NavLink>
        <nav className="menu">

            <NavLink to="/category/aros" className = "link">Aros</NavLink>
            <NavLink to="/category/pulseras" className = "link">Pulseras</NavLink>
            
        </nav>
        <CartWidget />

    </header>
  )
}

export default NavBar