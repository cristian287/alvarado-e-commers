
import './App.css';
import ItemListcontainer from './componets/itemListcontainer/itemListcontainer';
import Navbar from './componets/navbar/navbar';

import DetailList from './componets/itemListcontainer/detailListcontainer';
import {BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
 
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<ItemListcontainer></ItemListcontainer>}></Route>
          <Route path="/Detail/:ProductId" element={<DetailList></DetailList>}></Route>
          <Route path='/categories/:categoriesId' element={<ItemListcontainer></ItemListcontainer>}></Route>
        </Routes>
      </BrowserRouter>
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
