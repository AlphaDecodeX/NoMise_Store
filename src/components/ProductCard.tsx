import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css"
interface ProductCardProps {
  name: string;
  offer: string;
  img: string;
  external_id: string;
  id: number;
  price:number;
  rating:number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, offer, img, external_id, id ,price, rating}) => {
  return(
    <Link to={`/product/${external_id}`}>
      <div className="card">
        <img src={img} alt={name}/>
        <h2 className="card-name">{name}</h2>
        <p className="card-discount">
          {offer} Off
        </p>
        <div className="space-between">
          <div>
            Rating: {rating}
          </div>
          <div>
          Rs {price}/-
          </div>
            
        </div>
        
      </div>

    </Link>
    
  );
};

export default ProductCard;
