import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../features/product/components/Product';
import Homepage from './Homepage';
import Cart from '../features/cart/components/Cart';
import "./global.css"
import PageNotFound from '../components/PageNotFound';
import LoginPage from '../features/authentication/components/Login';

const App: React.FC = () => {
  return (
    <div>
      <Cart /> 
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/product/:externalId" element={<Product />} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;
