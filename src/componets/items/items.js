import './items.css'
import { Link } from 'react-router-dom'
const Imagen = (
    {
        id,
        nombre,
        img,
        descripcion,
        precio
    },
    
) => { return ( 
<div id="itemsOrg" className="border">
    <div>
        <div>
            <p>
                {nombre}
            </p>
        </div>
        <div>
            <img className='venta' src={img} alt= {nombre}></img>
        </div>
        <div>
            <p>
                {descripcion}
            </p>
        </div>
        <div>
        <button className='detalles'><Link to={`/Detail/${id}`}>Ver detalles de {nombre}</Link></button> 
        </div>
    </div>
</div>)}


 export default Imagen   