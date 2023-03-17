import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Product from '../features/product/components/Product';
import {Homepage, Props } from './Homepage';

const App: React.FC = () => {
  const props: Props = {
    name: "Lovepreet Singh",
    img: "sample img"
  };

  return (
    <Routes>
      <Route path="/" element = {<Homepage {...props} />}/>
      <Route path="/product/:id" element = {<Product />}/>
    </Routes>
    
  );
};

export default App;