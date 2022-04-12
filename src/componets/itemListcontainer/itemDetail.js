



const ItemDetail= ({ precio, stock, descripcion} ) =>  {

    return(
        <div>
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
                <p>
                {stock}
                </p>
            </div>
        </div>
    )
}
export default ItemDetail 