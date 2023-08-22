import React, { useContext } from 'react'
import { contexto } from '../miContexto'


function Cart() {

  const valor = useContext(contexto)

  return (
    <>
    <h1>Carrito de compras</h1>
    {valor.carrito.length <= 0 ? (
    <h2>No hay productos en el carrito.</h2>
    ) : (
    valor.carrito.map(producto => (
      <React.Fragment key={producto.nombre}>
      <div className=' cartList'>
        <h2>Artículo: {producto.nombre}</h2>
        <h2>Cantidad: {producto.cantidad}</h2>
        <h2>Precio: ${producto.precio}</h2>
        <h2>Total del producto: ${producto.precio*producto.cantidad}</h2>
        <button onClick={()=>valor.eliminarDelCarrito(producto.nombre)}>Eliminar</button>
        <hr></hr>
        <hr></hr>
        <hr></hr>
      </div>
      
      </React.Fragment> 
      ))
      

    )}
    
  

    {valor.carrito.length > 0 && (
        <div className='botones'>
          <h3>Total a pagar: ${valor.valorTotal}</h3>
          <button >Comprar</button>
          <button onClick={valor.vaciarCarrito}>Vaciar carrito</button>
        </div>
      )}



    
    </>
  )
}

export default Cart
