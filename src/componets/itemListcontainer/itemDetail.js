import {useContext} from 'react';
import { Link } from 'react-router-dom';
import Contador from '../conter/conter';
import CartContext from '../contex/cartContex';
import "./items.css"
import Sady from './sadSmay';

const ItemDetail= ({id, nombre,img,precio, stock, descripcion} ) =>  {
    const {consultarCarrito}= useContext (CartContext)
    const {addItem} = useContext(CartContext)
    const addCart = (count) => {
        console.log ("la puerca esta en la pocilga. compra realizada")
        const objetoSeleccionado = {id, precio, img, nombre}
        addItem ({...objetoSeleccionado, quantity:count})
        }

    return(
        <div className='bor'>
            <div className="detalles">
                <div className='contenedorImg'>
                    <p className='sitioImg'>
                        <img className='venta' src={img} alt= {nombre}></img>
                    </p>
                    <div>
                <p className='consult'>
                    {consultarCarrito(id)? <Link to = "/cart"> ver el contedido del carrito </Link> : <Contador initial={1} {...id} stock = {stock} carrito={addCart}  ></Contador> }
                </p>
            </div> 
                </div>
                <div className="obj">
                    <div>
                        <p>
                        <span> {nombre} </span> 
                        </p>
                    </div>
                    <div>
                        <p className='desck'>
                       <span>descripcion:</span>  {descripcion}
                        </p>
                    </div>
                    <div>
                        <p>
                   valor : <span>₿{precio}</span> 
                        </p>
                        <p>
                            stock:{stock}
                        </p>
                        <div className='angry'>
                            <Sady></Sady>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default ItemDetail 