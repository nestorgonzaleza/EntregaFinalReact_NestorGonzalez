import React from 'react'
import { useEffect, useState, createContext, useContext  } from "react"
import Loader from "../Loader"
import ItemList from "../ItemList"
import { useParams } from "react-router-dom"

const productosIniciales = [
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

function ItemListContainer() {
  const parametros = useParams()   
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [filtrados, setFiltrados] = useState([]) 
    
  useEffect(() => {
      setTimeout(() => {
          
        const fetchData = () => {
            return new Promise((resolve) => {

                resolve(productosIniciales);
              
            });
          };
        
          fetchData().then((productosIniciales) => {
            setProductos(productosIniciales)
            setLoading(false)
          });
        

         setFiltrados(productosIniciales.filter((item,id)=>{
            return item.categoría === parametros.id
          }))

          

      }, 2000)
  }, [parametros.id])

    if (parametros){
        if (loading) {
            return (
                <Loader/>
            )
        } else {
            return (
                <ItemList productos={filtrados}/>
            )
        }
        }
    else {

            return (
                <ItemList productos={productosIniciales}/>
                
            )
        }
    }
  

export default ItemListContainer
