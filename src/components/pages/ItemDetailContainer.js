import React from 'react'
import Loader from "../Loader"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react"
import ItemDetail from '../ItemDetail'

const productosIniciales1 = [
  {
      nombre :"aros_A",
      precio : 6000, 
      stock : 10,
      categoría:"aros",
      id:1,
      descripcion: "Descripcion del producto aros a",
      link:"/item/aros_A"},

  {
      nombre :"aros_B", 
      precio : 6800, 
      stock: 12, 
      categoría:"aros",
      id:2,
      descripcion: "Descripcion del producto aros b",
      link:"/item/aros_B"},

  {
      nombre :"pulsera_A", 
      precio : 5400, 
      stock: 8, 
      categoría:"pulseras",
      id:3,
      descripcion: "Descripcion del producto pulsera a",
      link:"/item/pulsera_A"},

  {
      nombre :"pulsera_B", 
      precio : 5900, 
      stock: 11, 
      categoría:"pulseras",
      id:4,
      descripcion: "Descripcion del producto pulsera b",
      link:"/item/pulsera_B"}
  
]

function ItemDetailContainer() {

  const parametros1 = useParams()   
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [filtrados1, setFiltrados1] = useState([]) 

  useEffect(() => {
      setTimeout(() => {
          
        const fetchData = () => {
            return new Promise((resolve) => {

                resolve(productosIniciales1);
              
            });
          };
        
          fetchData().then((productosIniciales1) => {
            setProductos(productosIniciales1)
            setLoading(false)
          });
        

         setFiltrados1(productosIniciales1.filter((item,id)=>{
            return item.nombre === parametros1.id
          }))
         console.log(productosIniciales1[0].nombre) 
         console.log(parametros1.id) 
         console.log(productosIniciales1) 
         console.log(filtrados1)

          

      }, 2000)
  }, [parametros1.id])


  if (loading) {
      return (
          <p>Obteniendo detalles...</p>
      )
  } else {
      return (
          <ItemDetail nombre={filtrados1[0].nombre} precio = {filtrados1[0].precio} descrip ={filtrados1[0].descripcion} link = {filtrados1[0].link}/>
      )
  }
}

export default ItemDetailContainer