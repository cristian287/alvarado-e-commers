import "./items.css"
import { useState,useEffect } from "react"
import { ProductsId} from "../../mockAsink"
import ItemDetail from "./itemDetail"                       
import { useParams } from "react-router-dom"
import Contador from '../conter/conter';

const DetailList= () => {
    const onCart= ( cantidad) => {
        console.log ("se agregaron " + cantidad + " de productos")
      }
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
            <div>
            <Contador initial={1} stock={10} onadd={onCart}></Contador>
            </div> 
        </div>
        
    )
}
export default DetailList 