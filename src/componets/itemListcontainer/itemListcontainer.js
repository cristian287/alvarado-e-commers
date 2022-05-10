import "./items.css"
import ItemList from "../items/itemsList"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"
import Eye from "./ejeball"
import Risitas from "./sonrisa"
import BrazoCartel from "./cartel"

const ItemListcontainer = () => {
    const [
        productos, setProductos 
    ] = useState ([])
    const {categoriesId}= useParams ()
    useEffect ( () => {
        const collectionRef = categoriesId 
        ? query ( collection ( firestoreDb , "Productos"),where ("category","==",categoriesId))
        : collection (firestoreDb, "Productos") 
        getDocs(collectionRef).then (response => {
            console.log (response)
            const products = response.docs.map (doc => {
                return {id:doc.id,...doc.data()}
            })
            setProductos (products)
            console.log (products)
        })
    },[categoriesId] ) 
    return (
        <div>
        <div className="items">
           <Eye></Eye> Esta listo para sonreir?...<span>NO...?</span> <Eye></Eye>
        </div>
        <div>
            <Risitas></Risitas>  
            <BrazoCartel></BrazoCartel>
        </div>
        <ItemList productos={productos}> </ItemList>
        
        </div>
      
    )
}
export default ItemListcontainer

