
import './App.css';
import ItemListcontainer from './componets/itemListcontainer/itemListcontainer';
import Navbar from './componets/navbar/navbar';

import DetailList from './componets/itemListcontainer/detailListcontainer';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContextProvider } from './componets/contex/cartContex';
import Carrito from './componets/cart/cart';




function App() {
 
  
  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ItemListcontainer></ItemListcontainer>}></Route>
          <Route path="/Detail/:ProductId" element={<DetailList></DetailList>}></Route>
          <Route path='/categories/:categoriesId' element={<ItemListcontainer></ItemListcontainer>}></Route>
          <Route path="/cart" element={<Carrito></Carrito>}></Route>
        </Routes>
      </BrowserRouter>
      </CartContextProvider>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
