import React from 'react';
import { Products } from '../features/products/components/Products';
import NavBar from '../layouts/Navbar';

type Props = {
  name: string,
  img: string
};

const Homepage: React.FC<Props> = (props: Props) => {

  return (
    <div>
      <NavBar/>
      <Products filter={"25% Off"}/>
    </div>
  );
};

export {
    Homepage
};