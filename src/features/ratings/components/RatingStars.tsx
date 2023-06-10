import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { useParams } from "react-router-dom";

interface RatingProps {
  value: number;
  onChange: (productId: string | undefined, value: number) => void;
}

const RatingStars: React.FC<RatingProps> = ({ value, onChange }) => {
  const { productId } = useParams<{ productId: string }>();
  const [stars, setStars] = useState<number>(value); // Updated state type to number

  useEffect(() => {
    onChange(productId, stars);
  }, [stars]);

  return (
    <div className="flex items-center text-white m-5">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          if (newValue !== null) {
            setStars(newValue);
          }
        }}
      />
    </div>
  );
};

export default RatingStars;
