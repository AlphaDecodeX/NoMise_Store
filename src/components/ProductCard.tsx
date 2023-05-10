import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  offer: string;
  img: string;
  external_id: string;
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, offer, img, external_id, id }) => {
  return(
    <Link to={`/product/${external_id}`}>
      <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer">
        <img className="w-full h-56 object-cover" src={img} alt={name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{name}</h2>
          <p className="text-gray-700">{offer}</p>
        </div>
      </div>
    </Link>
    
  );
};

export default ProductCard;
