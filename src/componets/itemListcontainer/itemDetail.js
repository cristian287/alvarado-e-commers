import { useState } from 'react';
import { Link } from 'react-router-dom';
import Contador from '../conter/conter';

const ItemDetail= ({id, nombre,img,precio, stock, descripcion} ) =>  {
    const [quantity, setQuantity] = useState(0)
    const addCart = (count) => {
        console.log ("la puerca esta en la pocilga. compra realizada")
        setQuantity (count)
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
                    <div>stock:{stock}</div> 
                    {quantity > 0 ? <Link to = "/cart"> ver el contedido del carrito </Link> : <Contador initial={1} {...id} stock = {stock} carrito={addCart}  ></Contador> }
                </p>
            </div>
        </div>
    )
}
export default ItemDetail 