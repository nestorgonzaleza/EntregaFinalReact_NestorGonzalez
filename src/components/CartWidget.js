import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { contexto } from './miContexto';
import { NavLink } from 'react-router-dom';

function CartWidget() {

  const valor = useContext(contexto)
  const cantidadTotal = valor.cantidadTotal;

  return (
    
      <div className='carroCompras'>
        <NavLink to="/cart"><FontAwesomeIcon icon={faShoppingCart} /></NavLink>
        {cantidadTotal > 0 && (
        <span className="badge">{valor.cantidadTotal}</span>
        )}
      </div>
     
  )
}

export default CartWidget