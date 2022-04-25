
import { useContext } from "react";
import CartContext from "../contex/cartContex";
import { Link } from "react-router-dom";
const Carrito = () => {
    const {carrito} = useContext (CartContext)
    const {eliminarItem} = useContext (CartContext
        )
    const {vaciarCarrito} = useContext (CartContext)
    let precioFinal = 0
    carrito.forEach(prod => {
        precioFinal += prod.precio*prod.quantity 
    });
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
            {precioFinal === 0?
            <div>
                <div> no hay nada que ver aqui... aun </div>
                <Link to ='/' > volver al nexus</Link>
            </div>:
            <div>
                total={precioFinal}$
            <button onClick={vaciarCarrito}>
                vaciar carrito
            </button>
            </div>
            }
            
        </div>
    )
}

export default Carrito