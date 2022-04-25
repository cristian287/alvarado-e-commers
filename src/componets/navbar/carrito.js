import { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../contex/cartContex";
import "./navbar.css";
const Carrito = () => {
    const {cantidadCarrito} = useContext (CartContext) 
    let mostrarCarrito = cantidadCarrito ()
    return(
        <div>
            {mostrarCarrito !== 0 ?
            <Link to = './cart'>
            <button>
                <img className="CarlosCarlin" src={require("./carlitos.png")} alt="carlitos.png"></img>   
            </button>
             <p className="numeral" >
                {cantidadCarrito ()}    
            </p>
            </Link>:<div></div>
            

        } 
            
        </div>
    )
}
export default Carrito