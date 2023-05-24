import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../features/product/components/Product';
import Homepage from './Homepage';
import Cart from '../features/cart/components/Cart';
import "./global.css"

const App: React.FC = () => {
  return (
    <div className='bg-gray-900'>
      <Cart /> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product/:externalId" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
