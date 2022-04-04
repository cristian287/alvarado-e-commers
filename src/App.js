
import './App.css';
import Item from './componets/itemListcontainer/itemListcontainer';
import Navbar from './componets/navbar/navbar';
import Contador from './componets/conter/conter';
function App() {
  const onCart= ( cantidad) => {
    console.log ("se agregaron " + cantidad + " de productos")
  }
  return (
    <div className="App">
    <Navbar></Navbar>
    <Item></Item>
    <Contador initial={0} stock={10} carrito={onCart}  ></Contador>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
