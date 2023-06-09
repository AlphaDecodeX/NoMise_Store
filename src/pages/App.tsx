import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../features/product/components/Product';
import { Homepage, Props } from './Homepage';
import Login from './LoginPage';
import Cart from '../features/cart/components/Cart';
import NavBar from '../layouts/Navbar';
import "./global.css"

const App: React.FC = () => {
  const props: Props = {
    name: "Lovepreet Singh",
    img: "sample img"
  };

  return (
    <div>
      <Cart /> 
      <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage {...props} />} />
        <Route path="/product/:externalId" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
