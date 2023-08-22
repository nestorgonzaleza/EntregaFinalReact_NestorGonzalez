import { useEffect, useState } from "react"
import Loader from "../Loader"
import ItemList from "../ItemList"
import { traerProductos, traerProductosPorCategoria } from "../Utils"
import { useParams } from "react-router-dom"

function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {

        let pedido;

        if (params.id) {
            pedido = traerProductosPorCategoria(params.id)
        } else {
            pedido = traerProductos()
        }

        pedido.then((resultado) => {
            setProductos(resultado)
            setLoading(false)
        })

    }, [params.id])


    if (loading) {
        return (
            <Loader />
        )
    } else {
        return (
            <ItemList productos={productos} />
        )
    }
}

export default ItemListContainer