import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div className='carroCompras'>
      <FontAwesomeIcon icon={faShoppingCart} />
      <div>(1)</div>
    </div>
  )
}

export default CartWidget