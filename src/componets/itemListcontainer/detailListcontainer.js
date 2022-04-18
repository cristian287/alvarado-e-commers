import "./items.css"
import { useState,useEffect } from "react"
import { ProductsId} from "../../mockAsink"
import ItemDetail from "./itemDetail"                       
import { useParams } from "react-router-dom"


const DetailList= () => {
    const [
        productos, setProductos 
    ] = useState ([])
    const{ProductId}=useParams()
    useEffect ( () => {
       ProductsId (ProductId).then (prods => {
            setProductos (prods)
        }).catch (error => {console.log (" err this not work because i am god")})    
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