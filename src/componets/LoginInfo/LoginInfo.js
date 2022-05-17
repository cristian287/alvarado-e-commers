import {useContext, useState}from "react";
import {doc,getDoc } from "firebase/firestore";
import { firestoreDb } from "../../services/firebase";
import { Link } from "react-router-dom";
import CartContext from "../contex/cartContex";
import "./login.css"
 
const LoginInfo = () => {
    const {setearLogin} =  useContext(CartContext)
    const [login, setLogin] =  useState(false)
    const [name,setName] = useState()
    const [error, setError] = useState(0)
    const handleOnSubmit = (event) => {
        event.preventDefault ()
        let {uname, pass} = document.forms[0]
        getDoc (doc(firestoreDb,"users", uname.value)).then (response => { 
            if (response.exists (doc)){
                let dataDoc = response.data ()
                if (dataDoc.password !== pass.value ){
                    setError (true)
                }
                else{
                    setLogin (true)
                    setearLogin (dataDoc)
                    setName (uname.value)
                }
            }
            else {
                setError(true)
            }
        })
    }
    return(
        <div>
            <div>
                <div>
                    
                </div>
                {login?<div className="logeado"> Logueado como: {name}</div>:
                <form onSubmit={handleOnSubmit}>
                    <div>
                        <div className="form">
                            <div className="nam">
                                <label>Nombre</label>
                                <input type="text" name="uname" required ></input>
                            </div>
                            <div className="pass">
                                <label >Contraseña</label>
                                <input type="password" name="pass" required ></input>
                            </div>
                        </div>
                        <div>
                            <div className="enter">
                                <div><input type="submit"  ></input>
                            </div>
                            <div className="regis">
                                <Link to="/register">registrar una cuenta </Link>
                            </div>
                        </div>
                        {error !== 0 ? <div className="error3312">los datos no coinciden</div>: <div></div>}
                     </div>
                    </div>
                </form>}
            </div>
        </div>
    )      
}
export default LoginInfo