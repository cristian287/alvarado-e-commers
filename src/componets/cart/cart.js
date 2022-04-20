
import { useContext } from "react";
import CartContext from "../contex/cartContex";

const Carrito = () => {
    const {carrito} = useContext (CartContext)
    const {eliminarItem} = useContext (CartContext)
    const {vaciarCarrito} = useContext (CartContext)
 
    return(
        <div>
            {carrito.map (prod =>
                <div key= {prod.id}>
                    <img src={prod.img} alt ="error">
                    </img>
                    producto: {prod.nombre}
                    precio: {prod.precio}
                    cantidad: {prod.quantity}
                    <div>
                        <button onClick={e => eliminarItem(prod.id)}>
                           eliminar producto 
                        </button>
                    </div>
                </div>
            )}
            <button onClick={vaciarCarrito}>
                vaciar carrito
            </button>
        </div>
    )
}

export default Carrito