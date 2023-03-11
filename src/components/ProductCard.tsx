import React from "react";

interface ProductCardProps {
  name: string;
  offer: string;
  img: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, offer, img }) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img className="w-full h-56 object-cover" src={img} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-700">{offer}</p>
      </div>
    </div>
  );
};

export default ProductCard;
