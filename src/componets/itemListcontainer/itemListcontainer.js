import "./items.css"
import ItemList from "../items/itemsList"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { firestoreDb } from "../../services/firebase"

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
            Esta listo para la venta...<span>NO...?</span> 
        </div>
        <ItemList productos={productos}> </ItemList>
        </div>
    )
}
export default ItemListcontainer

