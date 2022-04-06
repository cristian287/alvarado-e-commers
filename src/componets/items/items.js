import './items.css'
const Imagen = (
    {
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
            <p>
                {precio}
            </p>
        </div>
        <div>
        <button>Ver detalles de {nombre}</button>
        </div>
    </div>
</div>)}


 export default Imagen   