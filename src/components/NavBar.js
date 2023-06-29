import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <header className="encab">
        <h1>NOVOSITA</h1>
        <ul className="menu">
            <li><a className="link" href="#">Inicio</a></li>
            <li><a className="link" href="#">Quienes somos</a></li>
            <li><a className="link" href="#">Contacto</a></li>
            
        </ul>
        <CartWidget />

    </header>
  )
}

export default NavBar