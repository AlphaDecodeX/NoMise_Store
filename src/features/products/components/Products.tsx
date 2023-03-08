import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import { ProductService } from '../services/ProductService';
import { productCardFetchResponse } from '../utils/productResponse';
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
      <div>
        {products.map((product: productCardFetchResponse) => (
          <ProductCard name={product.name} offer={product.offer} img={product.img}/>
        ))}
      </div>
  );
};

export {
  Products
};