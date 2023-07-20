import React from 'react'
import { NavLink } from "react-router-dom"

function ItemDetail(props) {
  return (
    <>
    <div className = "container">
       
          <h2>{props.nombre}</h2>
          <h4>{props.precio}</h4>
          <h5>{props.descrip}</h5>
          <NavLink to={props.enlace} className = "link">Comprar</NavLink>
    </div>
    </>
  )
}

export default ItemDetail