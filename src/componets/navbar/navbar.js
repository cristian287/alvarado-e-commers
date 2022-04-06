import Carrito from './carrito'
import Logo from './logo'
import './navbar.css'

const Navbar = () => {
    return(
        <nav id = "hud">
            <div id='logo'>
                Carrrito de cosas 
                
            </div>
            <Logo></Logo>
            <div>   
            <Carrito></Carrito>            
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