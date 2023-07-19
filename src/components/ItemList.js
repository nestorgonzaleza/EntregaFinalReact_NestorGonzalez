import Item from "./Item"

function ItemList(props) {

    return (
        <section>
            {props.productos.map(productos => {
                return <Item id={productos.id} nombre={productos.nombre} precio={productos.precio} 
                link= {productos.link}/>
            })}
        </section>
    )
}
export default ItemList