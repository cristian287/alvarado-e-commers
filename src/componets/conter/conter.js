import {useState,useEffect} from "react";
import "./conter.css"
import MinusS from "./minusSmay";
import PlusSmay from "./plusSmay";


const Contador = ({ initial, stock, carrito })=>  {
    const [count, setCount ] = useState (initial)
    useEffect(() => {
        console.log ("funciona")
    },[])
    const Suma = () => {
        if ( count >= stock ) {
            console.log (" no se puede sumar, falta de stock")
        }
        else {
            setCount ( count +1)
        }
    }
    const Resta = () => {
        if ( count <= 0 ) {
            console.log ("no se esta comprando nada")
        }
        else {
            setCount ( count -1)

        }
    }
    return (
        <div className="contra">
            <div className="contador">
                <div className="resta" ><button onClick={Resta}><MinusS ></MinusS></button></div>
                <div className="suma"> <button onClick={Suma}> <PlusSmay></PlusSmay></button> </div>
            <div className="compra" >
                <div className="display"><p>hay {count} en el carrito</p> </div> 
                <button  className="buys" onClick={() => carrito (count) }> agregar al carrito  </button>
            </div>
        </div>
        </div>
    )

}
export default Contador
