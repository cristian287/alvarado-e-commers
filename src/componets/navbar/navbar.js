import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getCategories } from '../../mockAsink'
import Carrito from './carrito'
import Logo from './logo'
import './navbar.css'

const Navbar = () => {
    const [categories,setCategories]=useState([])
    useEffect(()=> {
        getCategories().then(categories=>{
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