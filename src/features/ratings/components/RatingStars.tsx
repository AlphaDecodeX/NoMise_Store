import React from "react";

interface RatingProps {
  value: number;
  onChange: (productId: number, value: number) => void;
}

const RatingStars: React.FC<RatingProps> = ({ value, onChange }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className="flex items-center text-white">
      Rating:
      {stars.map((star) => (
        <button
          key={star}
          className={`text-yellow-400 ${
            star <= value ? "fill-current" : "fill-gray-300"
          }`}
          onClick={() => onChange(value, star)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 15.428l-4.573 2.808 1.358-4.705L2.878 8.764l4.752-.41L10 4.955l2.37 3.4 4.752.41-3.907 3.767 1.358 4.705z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      ))}
    </div>
  );
};

export default RatingStars;
