import "./items.css"
import ItemList from "../items/itemsList"
import { useState,useEffect } from "react"
import { invocarProducts } from "../../mockAsink"

const ItemListcontainer = (props) => {
    const [
        productos, setProductos 
    ] = useState ([])
    useEffect ( () => {
        invocarProducts ().then (prods => {
            setProductos (prods)
        }).catch (error => {console.log (" err this not work because i am god")})    
    },[] ) 
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

