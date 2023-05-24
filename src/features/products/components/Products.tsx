import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/ProductCard';
import { ProductService } from '../services/ProductService';
import productFetchResponse from '../utils/productResponse';
import filterTypes from '../repository/filterTypes';

const Products: React.FC = () => {
  const [products, setProducts] = useState<Map<string, productFetchResponse[]>>(new Map());
  let productService: ProductService = new ProductService();
  useEffect(()=>{
    const productsToShow: Map<string, productFetchResponse[]> = new Map();
    filterTypes.forEach(filter => (
        productsToShow.set(filter.name, productService.fetchProductByFilter(filter.name))
    ));
    setProducts(productsToShow);
  }, []);

  return (
    <div className="flex-wrap bg-gray-900 overflow-x-auto whitespace-nowrap p-4">
      {Array.from(products.entries()).map(([heading, productArr]) => (
        <div key={heading} className="mb-4 w-75 overflow-auto">
          <h2 className="text-white text-lg font-semibold mb-2">{heading}</h2>
          <div className="flex space-x-4">
            {productArr.map((product: productFetchResponse) => (
              <ProductCard
                key={product.id}
                name={product.name}
                offer={product.offer}
                img={product.img}
                external_id={product.external_id}
                id={product.id}
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export {
  Products
};
