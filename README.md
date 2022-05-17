# The happy hour :)
por cristian alvarado 

Esta es mi primer app de react js, se trata de una inmobiliaria de espacios liminales, en la cual podras navegar por la pagina para ver el que mas o los que 
mas te gusten y adquirir tu espacio liminal favorito.

 # --- Forma de tomar el codigo ---

```Installation git clone
git clone https://github.com/cristian287/alvarado-e-commers/tree/main/src
npm install 
npm start
```


# --- Dependencias ---

1.React-Firebase

2.React-router-dom


# --- lenguajes implementados ---

- CSS

- HTML

- React JS

- JavaScript
 
# --- Firebase ---

este proyecto usa estas colecciones :

- id:
- img : string,
- name : string,
- descripcion : string,
- producto: string,
- category : string,
- description : string,
- quantity : number,


# --- cart contex --

- setearLogin = el estado que guarda el el log del usurio y le permite la compra 
- chequearLogin = chequea si el usuario esta logueado  
- chequearDatos = chequea los datos del usuario para la compra 
- addItem = añade los items al carrito 
- sumarItem = suma un item a otro igua ldentro del carrito
- checkStock= se fija que haya stock para comprar restando compras que hayan pasado o lo que haya en el mismo carrito
- eliminarItem = elimina todo el conjunto de items iguales del carrito 
- cantidadCarrito = indica la cantidad de prductos que hayen el carrito
- consultarCarrito = es para mostar o no el texto de ver el contenido del carrito y depende  de si hay un item en el o no 
- vaciarCarrito = vacia el contenido del carrito 

 # --- funcionamiento ---
 
 esta pagina empieza en el index (./) donde se muestran los elementos del "ItemListContainer" , en este punto los elementos no esta clasificado
 para clasificarlo se debe elegir una categoria de las que se encuentran en el "navbar", al tocar una el "firebase" (base de datos) encuentras analiza los articulos y manda solo los que corresponden a esa categoria,
 cuando un articulo es de su interes y quiere ver mas informacion, solo se debe dar click en "ver mas informacion" y gracias a detailListcontainer se muestra. 
 el detailListcontainer pasa a mostrar informacion del articulo elegido mostrando : nombre, descripcion, precio, y cantidad de stock.
 ademas de visualizarse el conter, el cual es un display para elegir la cantidad del elemento a comprar (el mismo evita que se pase del stock disponible y evita compras en 0 o negativa ), entonces una vez seleccionado se pasa al "carrito"
 
 ahora y una ves agregado uno o varios items al carrito  aparecera un icono en el nav bar 
 al darle click se podra acceder al mismo.
 
 en el nav bar tambien estara el panel de login, el que sera requerido para poder loguearte en la pagina, ya que para hacer la orden de compra se requiere una cuenta.  en cuyo caso de no tener una se puede tocar el boton de registrarte para que te lleve al formulario "register" y poder realizar dicha accion 
 
 una vez logueado ya se puede acceder a la orden de compra ya que la accion de comprar solo es accesible estando logueado,
 una vez hecho eso listo.
 puede disfrutar de su espacio liminal
 
# --- Asi se ve una ves ensamblada ---

![happy hour](https://user-images.githubusercontent.com/92070526/168915463-e0de57a0-7d38-4c22-840f-db912a062848.gif)


# --- Muchas gracias por la atencion ---


# --- fin del comunicado ---

