import "./items.css"
import { useState,useEffect } from "react"
import ItemDetail from "./itemDetail"                       
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"


const DetailList= () => {
    const [
        productos, setProductos 
    ] = useState ([])
    const{ProductId}=useParams()
    useEffect ( () => {
       getDoc ( doc (firestoreDb,"Productos",ProductId)).then (response => {
           const product = {id:response.id,...response.data()}
           setProductos (product)
       })
       return ( () => {setProductos()})   
    },[ProductId] ) 
    return (
        <div>
           <div>
                <ItemDetail {...productos}></ItemDetail>
            </div>
        </div>
        
    )
}
export default DetailList 