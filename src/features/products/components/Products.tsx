import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import { ProductService } from '../services/ProductService';
import productFetchResponse from '../utils/productResponse';

type Props = {
  filter: string
};

const Products: React.FC<Props> = ({filter}) => {
  const [products, setProducts] = useState<productFetchResponse[]>([]);
  let productService: ProductService = new ProductService();
  useEffect(()=>{
    setProducts(productService.fetchProductByFilter(filter))
  }, []);

  return (
    <div className="flex-wrap m-a-10">
      {products.map((product: productFetchResponse) => (
        <div>
          <ProductCard name={product.name} offer={product.offer} img={product.img} external_id = {product.external_id} id={product.id} price={product.price} rating={product.rating}/>
        </div>
      ))}
    </div>
  );
};

export {
  Products
};
