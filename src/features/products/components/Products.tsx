import React, { useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard";
import { ProductService } from "../services/ProductService";
import productFetchResponse from "../utils/productResponse";
import filterTypes from "../repository/filterTypes";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Map<string, productFetchResponse[]>>(
    new Map()
  );
  const productService: ProductService = new ProductService();

  useEffect(() => {
    async function getProducts() {
      for (const filter of filterTypes) {
        try {
          const response = await productService.fetchProductByFilterType(filter.name);
          setProducts((prevProducts) => new Map(prevProducts).set(filter.name, response));
        } catch (error) {
          console.log(`Error fetching products for filter ${filter.name}:`, error);
        }
      }
    }

    getProducts();
  }, []);
  

  return (
    <div className="flex-wrap whitespace-nowrap p-4">
      {Array.from(products.entries()).map(([heading, productArr]) => (
        <div key={heading} className="mb-4 w-75 overflow-auto">
          <h2 className="text-white text-lg font-semibold mb-2">
            {heading
              .split("_")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h2>
          <div className="flex space-x-4 overflow-x-auto">
            {productArr.map((product: productFetchResponse) => (
              <ProductCard
                key={product.id}
                name={product.name}
                offerId={product.offerId}
                img={product.img}
                externalId={product.externalId}
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

export { Products };
