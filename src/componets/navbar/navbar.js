import Carrito from './carrito'
import './navbar.css'

const Navbar = () => {
    return(
        <nav id = "hud">
            <div id='logo'>
                Carrrito de cosas 
            </div>
            <div>   
            <Carrito>
                
            </Carrito>            
            </div>
           <div>
               <a href="#hud" >
                   compra
               </a>
           </div>
           <div>
           <a href="#hud" >
                   venta
               </a>
           </div>
           <div>
                <a href="#hud" >
                   alquiler
               </a>
           </div>
        </nav>
    
    )
}
export default Navbar