
import { useContext, useState } from "react";
import CartContext from "../contex/cartContex";
import { Link } from "react-router-dom";
import {collection, getDocs, query, where, documentId, addDoc, writeBatch} from "firebase/firestore"
import {firestoreDb} from "../../services/firebase"
import "./cart.css"

const Carrito = () => {
    const {carrito, eliminarItem, vaciarCarrito, chequearLogin, chequearDatos} = useContext (CartContext)
    const [mensaje,setMensaje] = useState ("ir a elegir productos")
    const [mensajeCompra, setMensajecompra] = useState ("crear orden de conmpra") 
    const crearOrdendecompra = () => {
        if (chequearLogin ()=== true){
            let comprador = chequearDatos()
            const orden  = {
                items: carrito,
                comprador:{
                    nombre :comprador.nombre,
                    telefono : comprador.telefono,
                    mail: comprador.mail,
            },
            total: precioFinal,
            date: new Date() 
        }
            console.log(orden)
            const idProductoscomprar = carrito.map (prod => prod.id)
            const actualizar = writeBatch ( firestoreDb)
            const collectionRef = collection (firestoreDb,"Productos")
            const sinStock = []
            getDocs (query(collectionRef,where (documentId(), "in", idProductoscomprar))).then(response => {
                response.docs.forEach(doc => {
                    const dataDoc = doc.data()
                    const cantidadProducto = carrito.find (prod => prod.id === doc.id)?.quantity
                    if (dataDoc.stock >= cantidadProducto){
                        actualizar.update(doc.ref,{stock: dataDoc.stock - cantidadProducto})
                    } else {
                        sinStock.push({id:doc.id,...dataDoc})
                    }
                })
            }).then (()=> {
                if (sinStock.length === 0){
                    const collectionRef = collection (firestoreDb,"orders")
                    return addDoc(collectionRef,orden)
                }
                else {
                    console.log("???")
                    return Promise.reject ({name:"stockError",Productos:sinStock})
                }
                    
                    
            }).then (({id})=> {
                actualizar.commit()
            }).catch (error => {
                console.log(error)
                setMensaje("hubo un error ")
                vaciarCarrito ()
            }).finally(() => {
                vaciarCarrito()
                setMensaje("gracias por la compra ")
            })
        }
        else{
            setMensajecompra("ES REQUERIDO LOGUEARTE")
            setTimeout(() => {
                setMensajecompra("crear orden de compra")
            }, 1000);
        }

    }
   
    let precioFinal = 0
    carrito.forEach(prod => {
        precioFinal += prod.precio*prod.quantity 
    });
    return(
        <div>
            {carrito.map (prod =>
                <div key= {prod.id} >
                    <div className ="carlos">
                         <div>
                            <img src={prod.img} alt ="img" className="image"></img>
                        </div>
                        <div>
                        <p>
                            producto: {prod.nombre}
                        </p>
                        <p>
                            precio: {prod.precio}
                        </p>
                        <p>
                            cantidad: {prod.quantity}
                        </p>
                    </div>
                        </div>
                        <div>
                        <button className="elimin" onClick={e => eliminarItem(prod.id) }className="eliminar">
                           eliminar producto 
                        </button>
                    </div>
                    
                </div>
            )}
            {precioFinal === 0?
            <div>
                <div> no hay nada divertido que ver aqui... aun </div>
                <Link to ='/' > {mensaje}</Link>
            </div>:
            <div>
            <div>
                total={precioFinal}$
            <button className="empy" onClick={vaciarCarrito}>
                vaciar carrito
            </button>
            </div>
              <div>
               
                <button className="buy" onClick={crearOrdendecompra}>
                {mensajeCompra}
                </button>
               
            </div>
            </div>
            }
          
        </div>
    )
}
export default Carrito