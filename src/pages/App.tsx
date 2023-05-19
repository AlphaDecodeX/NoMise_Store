import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../features/product/components/Product';
import { Homepage, Props } from './Homepage';
import Cart from '../features/cart/components/Cart';
import "./global.css"

const App: React.FC = () => {
  const props: Props = {
    name: "Lovepreet Singh",
    img: "sample img"
  };

  return (
    <div>
      <Cart /> 
      <Routes>
        <Route path="/" element={<Homepage {...props} />} />
        <Route path="/product/:externalId" element={<Product />} />
      </Routes>
    </div>
  );
};

export default App;
