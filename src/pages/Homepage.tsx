import React from 'react';
import NavBar from '../layouts/Navbar';

type Props = {
  name: string,
  img: string
};

const Homepage: React.FC<Props> = (props: Props) => {
  // your component code goes here

  return (
    <div>
      <NavBar/>
    </div>
  );
};

export {
    Homepage, Props
};