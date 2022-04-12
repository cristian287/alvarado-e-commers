
import './App.css';
import ItemListcontainer from './componets/itemListcontainer/itemListcontainer';
import Navbar from './componets/navbar/navbar';
import Contador from './componets/conter/conter';
import DetailList from './componets/itemListcontainer/detailListcontainer';
function App() {
  const onCart= ( cantidad) => {
    console.log ("se agregaron " + cantidad + " de productos")
  }
  return (
    <div className="App">
    <Navbar></Navbar>
    <ItemListcontainer></ItemListcontainer>
    <Contador initial={0} stock={10} carrito={onCart}  ></Contador>
    <DetailList></DetailList>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
