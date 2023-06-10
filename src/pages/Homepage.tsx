import React from 'react';
import { Products } from '../features/products/components/Products';
import NavBar from '../layouts/Navbar';
import Footer from "../layouts/Footer"

const Homepage: React.FC = () => {

  return (
    <div>
      <NavBar/>
      <Products/>
      <Footer/>
    </div>
  );
};

export default Homepage;