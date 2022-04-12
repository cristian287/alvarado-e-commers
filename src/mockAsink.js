


const Productos = [
    {
    id: 1,
    nombre: 'El pasillo',
    img:'https://m.media-amazon.com/images/I/91eL3QY7eML._SS500_.jpg',
    precio: 20000,
    stock: 10,
    descripcion: ' Hermoso pasillo donde poder admirar la belleza de la noche y reclamar a la soledad algo de compañia ',

},
{
    id: 2,
    nombre: 'El complejo',
    img:'https://images.squarespace-cdn.com/content/v1/57825361440243db4a4b7830/1625732601721-R1F3UTY2Z8382S3XNQQO/sctvmqpnr1b51.jpeg',
    precio: 113000,
    stock: 10,
    descripcion: 'Gigante complejo perfecto  para alquilar o cumplir el sueño de tu infancia de perderte en la imencidad de la noche',

},
{
    id: 3,
    nombre: 'La escuela',
    img:'https://cbaltico.edu.mx/wp-content/uploads/2021/04/1.jpeg',
    precio: 70333,
    stock: 10,
    descripcion: 'Quien no quiso comprar su propia escuela ? nadie puede mentir en eso y es que este lugar la enseñanza abunda en cada rincon y no es lo unico que abunda ',

},
{
    id: 4,
    nombre: 'El parque',
    img:'https://i.pinimg.com/750x/f1/65/20/f165206e76e40cec0cd284477251a123.jpg',
    precio: 90666,
    stock: 10,
    descripcion: 'el lugar que todo chico soño ahora al alcace de su billetera. al final del dia todos soñamos con tener el cuerpo de un chico otra ves y no hay lugar como este para encontrarlo y para esconderlo de adultos de mente cerrada ',

},

]

export const invocarProducts = () => {
    return new Promise (
        resolve => {
            setTimeout ( 
                () => {
                    resolve (Productos)
                },2000)
        }
    )

}

export const ProductsId = (id) => {
    return new Promise (
        resolve => {
            setTimeout ( 
                () => {
                    resolve (Productos.find (prod => prod.id === id) )
                },2000)
        }
    )

}
