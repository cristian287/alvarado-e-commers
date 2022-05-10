
import { useContext } from "react";
import CartContext from "../contex/cartContex";
import { Link } from "react-router-dom";
import {collection, getDocs, query, where, documentId, addDoc, writeBatch} from "firebase/firestore"
import {firestoreDb} from "../../services/firebase"
import "./cart.css"

const Carrito = () => {
    const crearOrdendecompra = () => {
        const orden  = {
            items: carrito,
            compradores:{
            nombre :"usuario",
            telefono : 12345,
            mail: "mail@mail.com",
            },
        total: precioFinal,
        date: new Date() 
        }
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
            return Promise.reject ({name:"stockError",Productos:sinStock})
        }
    }).then (({id})=> {
        actualizar.commit()
    }).catch (error => {console.log(error)})
    
    }
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
                <div key= {prod.id} className ="carlos">
                    <div>
                    <img src={prod.img} alt ="error"></img>
                    </div>
                    <div>
                        producto: {prod.nombre}
                        precio: {prod.precio}
                        cantidad: {prod.quantity}
                    </div>
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
            <div>
               
                <button onClick={crearOrdendecompra}>
                 <Link to = '/' >comprar</Link>
                </button>
               
            </div>
        </div>
    )
}
export default Carrito