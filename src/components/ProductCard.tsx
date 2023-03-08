import React from "react";

interface ProductCardProps {
  name: string;
  offer: string;
  img: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, offer, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <div className="card-info">
        <h2>{name}</h2>
        <p>{offer}</p>
      </div>
    </div>
  );
};

export default ProductCard;
