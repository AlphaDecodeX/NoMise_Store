import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { ProductService } from "../../products/services/ProductService";
import { productFetchResponse } from "../../products/utils/productResponse";
import RatingStars from "../../ratings/components/RatingStars";
import { RatingService } from "../../ratings/services/RatingService";

const Product: React.FC = () => {
  const ratingService: RatingService = new RatingService();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("id");
  const productService = new ProductService();
  var [productToShow, setProductToShow] = useState<productFetchResponse | null>(null);
  useEffect(() => {
    if (productId) {
      const product = productService.fetchProductById(parseInt(productId))?.[0];
      setProductToShow(product);
    }
    console.log("Hello -------", productId, productToShow);
  }, []);
  
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 m-5">
        <div className="w-3/6 h-3/6">
          <img
            src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81Y5k2JdsTL._SL1500_.jpg"
            alt="Product Image"
          />
          <RatingStars value={4} onChange={ratingService.ratingsChange} />
        </div>
      </div>
      <div className="col-span-1">
        {productToShow?
        <div>
            <h3>{productToShow.name}</h3>
        </div>
        :null}
      </div>
    </div>
  );
};

export default Product;
