import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductService } from "../../products/services/ProductService";
import productFetchResponse from "../../products/utils/productResponse";
import RatingStars from "../../ratings/components/RatingStars";
import { RatingService } from "../../ratings/services/RatingService";
import Specifications from "./Specifications";
import { CartService } from "../../cart/services/cartService";

const Product: React.FC = () => {
  const { externalId } = useParams<{ externalId: string }>(); // Get the id parameter from the URL
  const ratingService: RatingService = new RatingService();
  const productService = new ProductService();
  const [productToShow, setProductToShow] =
    useState<productFetchResponse | null>(null);
  const cartService: CartService = new CartService();

  useEffect(() => {
    if (externalId) {
      const product: productFetchResponse =
        productService.fetchProductByExternalId(externalId)[0];
      setProductToShow(product);
      console.log("Product is ", product);
    }
  }, [externalId, productService]);

  const specifications = {
    Dimensions: "10 x 20 x 5 cm",
    Weight: "250 grams",
    Material: "Plastic",
    Color: "Red",
  };

  const addToCart = () => {
    if (productToShow) {
      cartService.addProductToCart(productToShow);
    }
  };

  return (
    <div className="h-[100vh]">
      <div className="grid grid-cols-3 p-5">
        <div className="col-span-2 m-5">
          <div className="w-3/6 h-3/6">
            <img src={productToShow?.img} alt="Product Image" />
            {productToShow ? (
              <RatingStars
                value={productToShow?.numberOfRatings}
                onChange={ratingService.ratingsChange}
              />
            ) : null}
          </div>
        </div>
        <div className="col-span-1 bg-gray-100 p-6 rounded-lg">
          {productToShow ? (
            <div>
              <h1 className="text-3xl font-bold mb-4">{productToShow.name}</h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {productToShow.description}
              </p>
              <span className="text-green-500 text-lg mb-4">
                {productToShow.offer}
              </span>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                {productToShow.price}
              </h3>
            </div>
          ) : null}
          <div className="flex justify-between">
            <button className="common-button">Buy Now</button>
            <button className="inverted-button" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        <Specifications specifications={specifications} />
      </div>
    </div>
  );
};

export default Product;
