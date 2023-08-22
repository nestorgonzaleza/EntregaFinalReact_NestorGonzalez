import { useEffect, useState } from "react"
import { traerProductoPorId } from "../Utils"
import ItemDetail from '../ItemDetail'
import { useParams } from "react-router-dom"

function ItemDetailContainer() {

    const [producto, setProducto] = useState({})
    const params = useParams()

    useEffect(()=>{
        traerProductoPorId(params.id)
            .then((resultado)=>{

              setProducto(resultado)
                
            })
            .catch((error)=>{
                console.log(error)
            })


    },[params.id])

    return (
        <div>
            <ItemDetail nombre={producto.nombre} precio={producto.precio} descrip={producto.descripcion} link={producto.link} image={producto.image} descripcion={producto.descripcion} stock ={producto.stock}/>
        </div>
    )
}

export default ItemDetailContainer