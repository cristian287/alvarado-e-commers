import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import Carrito from './carrito'
import Logo from './logo'
import './navbar.css'

const Navbar = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=> {
        getDocs(collection(firestoreDb,"categories")).then(response => {
            const categories = response.docs.map (doc=>{
                return { id:doc.id,...doc.data()}
            })
            setCategories(categories)
        })
        },[])
    return(
        <nav id = "hud">
            <div id='referente'>
                the happy hour
            </div>
            <Logo></Logo>
            <div>   
            <Carrito></Carrito>            
            </div>
            <div>
            {categories.map(cat=><NavLink className="botones" key={cat.id}to={`/categories/${cat.id}`}>{cat.description}</NavLink>)}
           </div>
        </nav>
    
    )
}
export default Navbar
