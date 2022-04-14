import "./navbar.css";
const Carrito = () => {
    return(
        <div>
            <button>
                <img className="CarlosCarlin" src={require("./carlitos.png")} alt="carlitos.png"></img>   
            </button>
             <p className="numeral" >
                    19    
            </p>
        </div>
    )
}
export default Carrito