import "./items.css"
import ItemList from "../items/itemsList"
import { useState,useEffect } from "react"
import { invocarProducts } from "../../mockAsink"
import { useParams } from "react-router-dom"

const ItemListcontainer = () => {
    const [
        productos, setProductos 
    ] = useState ([])
    const {categoriesId}= useParams ()
    useEffect ( () => {
        invocarProducts (categoriesId).then (prods => {
            setProductos (prods)
        }).catch (error => {console.log (" err this not work because i am god")})    
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

