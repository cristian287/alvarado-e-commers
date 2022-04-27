import {useState,useEffect} from "react";
import "./conter.css"

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
        <div>
            <div className="contador">
                <button onClick={Resta}> - </button>
                <div className="display">{count}</div> 
                <button onClick={Suma}> + </button>
            </div>
            <button className="compra" onClick={() => carrito (count) }>  agregar al carrito  </button>
        </div>
    )

}
export default Contador
