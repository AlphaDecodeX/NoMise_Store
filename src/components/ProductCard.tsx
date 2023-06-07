import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
interface ProductCardProps {
  name: string;
  offer: string;
  img: string;
  external_id: string;
  id: number;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  offer,
  img,
  external_id,
  id,
  price,
  rating,
}) => {
  return (
    <Link to={`/product/${external_id}`}>
      <div
        className="border-solid border-2 border-black relative"
        id="card"
      >
        <div id="cardImage">
          <img src={img} alt={name}/>
        </div>
        <div
          id="label"
          className="absolute top-0 right-0 p-2 bg-red-500 text-white"
        >
          <p>25% Off</p>
        </div>
        <div id="footer" className="bg-black text-white p-5">
          <p>{name.length > 20 ? name.substring(0, 20) + "..." : name}</p>
          <div id="ratingPrice" className="flex justify-between my-2">
            <p>Rating: {rating}</p>
            <p>Rs {price}/-</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
