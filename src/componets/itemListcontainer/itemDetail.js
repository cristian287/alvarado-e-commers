import {useContext} from 'react';
import { Link } from 'react-router-dom';
import Contador from '../conter/conter';
import CartContext from '../contex/cartContex';

const ItemDetail= ({id, nombre,img,precio, stock, descripcion} ) =>  {
    const {consultarCarrito}= useContext (CartContext)
    const {addItem} = useContext(CartContext)
    const addCart = (count) => {
        console.log ("la puerca esta en la pocilga. compra realizada")
        const objetoSeleccionado = {id, precio, img, nombre}
        addItem ({...objetoSeleccionado, quantity:count})
        }

    return(
        <div className="detalles">
            <div>
                <p>
                    <img className='venta' src={img} alt= {nombre}></img>
                </p>
            </div>
            <div>
                <p>
                 descripcion: {descripcion}
                </p>
            </div>
            <div>
                <p>
               $ {precio}
                </p>
            </div>
            <div>
                <p>
                    <p>stock:{stock}</p>
                    {consultarCarrito(id)? <Link to = "/cart"> ver el contedido del carrito </Link> : <Contador initial={1} {...id} stock = {stock} carrito={addCart}  ></Contador> }
                </p>
            </div>
        </div>
    )
}
export default ItemDetail 