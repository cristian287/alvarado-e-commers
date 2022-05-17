import {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Contador from '../conter/conter';
import CartContext from '../contex/cartContex';
import "./items.css"
import Sady from './sadSmay';

const ItemDetail= ({id, nombre,img,precio, stock, descripcion} ) =>  {
    const {consultarCarrito, addItem, sumarItem, checkStock}= useContext (CartContext)
    const [toCart, setToCart] = useState (0)
    const stockActual = checkStock (stock, id)

    
    const addCart = (count) => {
        setToCart (count)
        if (consultarCarrito (id)) {
            sumarItem (count,id) 
        }
         else{
                console.log ("la puerca esta en la pocilga. compra realizada")
                const objetoSeleccionado = {id, precio, img, nombre}
                addItem ({...objetoSeleccionado, quantity:count})
         }
        
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
                    {toCart>0? <Link to = "/cart"> ver el contedido del carrito </Link> : <Contador initial={0} {...id} stock = {stockActual} carrito={addCart}  ></Contador> }
                </p>
            </div> 
                </div>
                <div className="obj">
                    <div>
                        <p className='title'>
                        <span > {nombre} </span> 
                        </p>
                    </div>
                    <div>
                        <p className='desck'>
                       <span>descripcion:</span>  {descripcion}
                        </p>
                             <p className='press'>
                   valor : <span>₿{precio}</span> 
                        </p>
                        <p className='stock'>
                            stock:{stockActual}
                        </p>
                        <p className='angry'>
                            <Sady></Sady>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default ItemDetail 