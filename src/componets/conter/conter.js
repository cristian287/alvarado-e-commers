import {useState,useEffect} from "react";
import "./conter.css"
import MinusS from "./minusSmay";

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
                <div className="resta" ><button onClick={Resta}> - </button></div>
                <div className="suma"> <button onClick={Suma}><MinusS ></MinusS></button> </div>
                <div className="display">en el carrito = {count}</div> 
            </div>
            <div className="compra " >
                <button  onClick={() => carrito (count) }> agregar al carrito  </button>
            </div>
        </div>
    )

}
export default Contador
