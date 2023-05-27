import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
interface ProductCardProps {
  name: string;
  offerId: string;
  img: string;
  externalId: string;
  id: number;
  price: number;
  rating: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  offerId,
  img,
  externalId,
  id,
  price,
  rating,
}) => {
  return (
    <Link to={`/product/${externalId}`}>
      <div className="card relative max-w-sm border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={img} alt={name} />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300">
              {name.length > 20 ? name.substring(0, 20) + "..." : name}
            </h5>
          </a>
          <p className="card-discount">{offerId} Off</p>
          <div className="mb-3 font-normal text-gray-300 dark:text-gray-400 space-between">
            <div>Rating: {rating}</div>
            <div>Rs {price}/-</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
