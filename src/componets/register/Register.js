import { useState } from "react";
import { firestoreDb } from "../../services/firebase";
import { collection, doc , getDoc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const RegisterAccount = () => {
    const [isRegistred, setRegister] = useState (false)
    const [mensaje, setMensaje] =useState ("Registrar una nueva cuenta ")
    const collectionRef =  collection (firestoreDb,"users")
    const handleOnSubmit = (event) => {
        event.preventDefault () 
        let {name, password, mail,phone}= document.forms[1]
        getDoc(doc(collectionRef, name.value)).then (response => {
            if( response.exists(doc)){
                setMensaje ("el usuario ya existe")
            }
            else{
                const usuario = {
                    nombre:name.value,
                    password: password.value,
                    mail:mail.value,
                    telefono:phone.value
                }
                setRegister (true)
                setDoc (doc (collectionRef, name.value),usuario)
            }
        })
    }
    return(
        <div>
            {isRegistred? 
            <div> 
                <div>registrado exitosamente</div>
                <Link to="/"> volver a elegir productos </Link>
            </div>:
            <form onSubmit={handleOnSubmit}>
                <div>{mensaje}</div>
                <label>Nombre de usuario</label>
                <input type="text" name="name" required ></input>
                <label>Contraseña</label>
                <input type="password" name="password" required ></input>
                <label>Email</label>
                <input type="email" name="mail" required ></input>
                <label>numero de telefono</label>
                <input type="number" name="phone" required ></input>
                <div>
                    <input type="submit"></input>
                </div>
            </form>
            }
        </div>
    ) 
}
export default RegisterAccount