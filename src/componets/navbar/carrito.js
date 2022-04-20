import { useContext } from "react";
import CartContext from "../contex/cartContex";
import "./navbar.css";
const Carrito = () => {
    const {cantidadCarrito} = useContext (CartContext) 
    return(
        <div>
            <button>
                <img className="CarlosCarlin" src={require("./carlitos.png")} alt="carlitos.png"></img>   
            </button>
             <p className="numeral" >
                     {cantidadCarrito ()}    
            </p>
        </div>
    )
}
export default Carrito