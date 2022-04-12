import "./items.css"
import { useState,useEffect } from "react"
import { ProductsId} from "../../mockAsink"
import ItemDetail from "./itemDetail"                       

const DetailList= () => {
    const [
        productos, setProductos 
    ] = useState ([])
    useEffect ( () => {
       ProductsId (1).then (prods => {
            setProductos (prods)
        }).catch (error => {console.log (" err this not work because i am god")})    
    },[] ) 
    return (
        <div>
            <ItemDetail {...productos}></ItemDetail>
        </div>
    )
}
export default DetailList 