import React, { useContext } from 'react'
import { useState } from "react"
import { contexto } from './miContexto'

function ItemCount(props) {

    const [contador, setContador] = useState(0)
    const valor = useContext(contexto)


    const handleSumar= () =>{
      if(props.stock>contador){
        setContador(contador + 1)
      }
    }

    const handleRestar= () =>{
      if(contador>1){
      setContador(contador - 1)
      }
    }

  return (
    <div>  

        <p>Cantidad: {contador}</p>
        <button onClick = {handleSumar}>Agregar unidad</button>
        <button onClick = {()=>{valor.agregarAlCarrito(props.nombre,contador,props.precio)}}>Agregar al carrito</button>
        <button onClick = {handleRestar}>Quitar unidad</button>

    </div>
  )
}

export default ItemCount