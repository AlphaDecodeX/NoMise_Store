import React from 'react';
import { Products } from '../features/products/components/Products';
import NavBar from '../layouts/Navbar';

const Homepage: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <Products filter={"25% Off"}/>
    </div>
  );
};

export default Homepage;