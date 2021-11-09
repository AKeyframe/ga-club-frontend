import { Route, Routes } from "react-router-dom";
import {useRef} from 'react';
import './App.scss';

import Index from './pages/Index';
import Sneakers from "./pages/Sneakers";
import New from './pages/New';
import DeleteSneakers from './pages/DeleteSneakers';
import Edit from "./pages/Edit";
import Show from './pages/Show';


import Cart from "./pages/Cart";

import NavBar from './components/NavBar';
import Footer from "./components/Footer";


function App() {

  let cart = useRef();
  cart.current = []


  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/sneakers' element={<Sneakers />} />
        <Route path='/new' element={<New />}/>
        <Route path='/sneakers/:id/delete'
                element={<DeleteSneakers />} />

        <Route path='/sneakers/:id/edit'
                element={<Edit />} />
                
        <Route path='/sneakers/:id' element={<Show cart={cart}/>}/>
        

        <Route path='/cart' element={
              <Cart cart={cart}/>}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
