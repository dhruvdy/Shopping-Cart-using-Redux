import { useState } from 'react';
import {Routes,Route} from 'react-router-dom'
import './App.css';
import Header from './Components/Header.jsx';
import Items from './Components/Items.jsx';
import Cart from './Components/Cart.jsx';

function App() {

  return (
    <div className="h-auto w-[100vw] overflow-x-hidden">
      <Header />

      <Routes>
        <Route path='/' element={<Items/>} />
        <Route path='/Cart' element={<Cart/>} />
      </Routes>

    </div>
  )
}

export default App
