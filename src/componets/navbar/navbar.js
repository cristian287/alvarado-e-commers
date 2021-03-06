import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import {NavLink } from 'react-router-dom'
import { firestoreDb } from '../../services/firebase'
import Carrito from './carrito'
import Logo from './logo'
import './navbar.css'
import Smay from './smay'
import LoginInfo from '../LoginInfo/LoginInfo'

const Navbar = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=> {
        getDocs(collection(firestoreDb,"categories")).then(response => {
            const categories = response.docs.map (doc=>{
                return { id:doc.id,...doc.data()}
            })
            console.log(categories)
            setCategories(categories)
        })
        },[])
    return(
        <nav id = "hud">
            <div id='referente'>
                the happy h<Smay></Smay>ur
                
            </div>
            <LoginInfo></LoginInfo>
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
