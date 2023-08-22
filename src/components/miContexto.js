import { createContext, useEffect, useState } from "react";

export const contexto = createContext()

const Provider = contexto.Provider

function CartProvider(props) {
    const [carrito, setCarrito] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    const [variante, setVariante] = useState(0);

    const agregarAlCarrito = (nombre, numero, precio) => {
        
        const objetoExistente = carrito.find(obj => obj.nombre === nombre);
        if (objetoExistente) {
            objetoExistente.cantidad += numero;
            setVariante(variante+1)
        } else {
            setCarrito([...carrito, { nombre, cantidad: numero, precio }]);
            setVariante(variante+1)
        }
    }

    const eliminarDelCarrito = (nombre) => {
        setCarrito(carrito.filter(obj => obj.nombre !== nombre));
    }

    useEffect(() => {
        let totalCant = 0;
        let totalSum = 0;

        carrito.forEach(producto => {
            const precioTotal = producto.cantidad * producto.precio;
            totalSum += precioTotal;
            totalCant += producto.cantidad;
        });

        setValorTotal(totalSum);
        setCantidadTotal(totalCant);
    }, [carrito, variante]);

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const valorDelContexto = {
        carrito: carrito,
        valorTotal: valorTotal,
        cantidadTotal: cantidadTotal,
        agregarAlCarrito: agregarAlCarrito,
        eliminarDelCarrito: eliminarDelCarrito,
        vaciarCarrito: vaciarCarrito,
        variante:variante
    }

    return (
        <Provider value={valorDelContexto}>
            {props.children}
        </Provider>
    )
}

export default CartProvider;