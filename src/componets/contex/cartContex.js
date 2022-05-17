import { createContext, useState } from "react";

const CartContext = createContext()
export const CartContextProvider = ({children}) => {
    const [carrito, setCarrito] = useState ([])
    const [logueado, setLogueado] = useState (false)
    const [datos, setDatos] = useState ({})
    const setearLogin = (data) => {
        setLogueado (true)
        setDatos (data)
    }
    const chequearLogin = () => {
        if (logueado) {
            return true
        }
        else {
            return false 
        }
    } 
    const chequearDatos = () => { return datos}
    const addItem = (producto) => {
        setCarrito ([...carrito, producto])
    }
    const sumarItem = (count,id) => {
        const actualizar = {id:0}
        const [producto] =  carrito.filter (prod => prod.id === id)
        producto.quantity += count 
        setCarrito(carrito, actualizar)
        eliminarItem(0) 
    }
    const checkStock = (stockFinal, id) => {
        const [producto] =  carrito.filter (prod => prod.id === id)
        if ( producto === undefined) {
            return stockFinal
        }
        else {
            let stockActual = stockFinal - producto.quantity
            return stockActual
        }
    }  
    const eliminarItem = (id) => {
        const eliminar = carrito.filter(prod => prod.id !== id)
        setCarrito(eliminar)
    }
    const cantidadCarrito = () => {
        let cantidad = 0
        carrito.forEach(prod => {
            cantidad= cantidad += prod.quantity
        })
        return cantidad
    }
    const consultarCarrito = (id) => {
        return carrito.some(prod => prod.id === id)
    }
    const vaciarCarrito = () => {
        setCarrito([])
    }
    return (
        <CartContext.Provider value = {{carrito, addItem, eliminarItem, cantidadCarrito, consultarCarrito, vaciarCarrito, checkStock, sumarItem, setearLogin,chequearLogin,chequearDatos}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext


