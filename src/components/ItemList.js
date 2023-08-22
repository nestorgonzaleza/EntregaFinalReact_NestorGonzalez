import Item from "./Item"

function ItemList(props) {

    return (
        <section className="tarjetas">
            {props.productos.map(productos => {
                return <Item key={productos.id} nombre={productos.nombre} precio={productos.precio} 
                link= {productos.link} image={productos.image}/>
            })}
        </section>
    )
}
export default ItemList