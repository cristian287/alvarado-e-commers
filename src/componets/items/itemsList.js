import Imagen from "./items";

const ItemList = ( {productos} ) => {
    return ( 
        <ul>
            { productos.map (prod => <Imagen key={ prod.id}{...prod}></Imagen> )}
        </ul>
    )
}
export default ItemList