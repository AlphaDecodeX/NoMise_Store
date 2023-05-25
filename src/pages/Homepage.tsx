import React from 'react';
import { Products } from '../features/products/components/Products';

type Props = {
  name: string,
  img: string
};

const Homepage: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <Products filter={"25% Off"}/>
    </div>
  );
};

export {
    Homepage, Props
};