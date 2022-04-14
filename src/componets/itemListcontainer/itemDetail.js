


const ItemDetail= ({ nombre,img,precio, stock, descripcion} ) =>  {
   

    return(
        <div className="detalles">
            <div>
                <p>
                    <img className='venta' src={img} alt= {nombre}></img>
                </p>
            </div>
            <div>
                <p>
                descripcion: {descripcion}
                </p>
            </div>
            <div>
                <p>
               $ {precio}
                </p>
            </div>
            <div>
                <p>
                stock: {stock}
                </p>
            </div>
            
        </div>
    )
}
export default ItemDetail 