import React from 'react'
import ItemCount from './ItemCount'



function ItemDetail(props) {
  return (
    <>
    <div className = "container">
          <img className='imagen_muestra' src={props.image} alt="Descripción de la imagen" />
          <h2>{props.nombre}</h2>
          <h4>${props.precio}</h4>
          <h5>{props.descrip}</h5>
          <p>Unidades disponibles: {props.stock}</p>
          
          <ItemCount nombre={props.nombre} precio={props.precio} stock={props.stock}/>
    </div>
    </>
  )
}

export default ItemDetail