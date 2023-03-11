import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import { ProductService } from '../services/ProductService';
import { productFetchResponse } from '../utils/productResponse';

type Props = {
  filter: string
};

const Products: React.FC<Props> = ({filter}) => {
  const [products, setProducts]:any = useState([]);
  let productService: ProductService = new ProductService();
  useEffect(()=>{
    setProducts(productService.fetchProductCards(filter))
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
      {products.map((product: productFetchResponse) => (
        <div>
          <ProductCard name={product.name} offer={product.offer} img={product.img}/>
        </div>
      ))}
    </div>
  );
};

export {
  Products
};
