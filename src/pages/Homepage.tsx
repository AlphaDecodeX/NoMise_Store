import React from 'react';
import { Products } from '../features/products/components/Products';
import NavBar from '../layouts/Navbar';

const Homepage: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <Products/>
    </div>
  );
};

export default Homepage;