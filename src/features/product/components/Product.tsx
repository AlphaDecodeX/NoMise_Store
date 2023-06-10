import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductService } from "../../products/services/ProductService";
import productFetchResponse from "../../products/utils/productResponse";
import RatingStars from "../../ratings/components/RatingStars";
import { RatingService } from "../../ratings/services/RatingService";
import Specifications from "./Specifications";
import { CartService } from "../../cart/services/cartService";
import Reviews from "../../reviews/components/Reviews";

const Product: React.FC = () => {
  const { externalId } = useParams<{ externalId: string }>();
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
    <div id="product" className="sm:flex bg-black text-white">
      <div id="productImage" className="mt-5 sm:w-1/2">
        <img src={productToShow?.img} className="w-1/2" />
        {productToShow ? (
          <RatingStars
            value={productToShow?.numberOfRatings}
            onChange={ratingService.ratingsChange}
          />
        ) : null}
        <Specifications specifications={specifications} />
      </div>
      {productToShow ? (
        <div id="buyAddToCart" className="sm:w-1/2 ml-2 p-5">
          <h2>{productToShow.name}</h2>
          <p className="mt-2 mb-2">{productToShow.description}</p>
          <div className="flex justify-between m-1">
            <span className="text-green-500 text-lg mb-4">
              {productToShow.offer}
            </span>
            <h3 className="text-3xl font-bold text-gray-500 mb-4">
              Rs. {productToShow.price}/-
            </h3>
          </div>
          <div className="mb-5">
            <button className="focus:outline-none rounded bg-indigo-500 text-white p-2">
              Buy Now
            </button>
            <button className="focus:outline-none hover:bg-indigo-500 rounded bg-gray-500 text-white ml-2 p-2">
              Add to Cart
            </button>
          </div>
          <Reviews/>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
