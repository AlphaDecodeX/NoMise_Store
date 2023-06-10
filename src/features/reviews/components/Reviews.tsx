import React from "react";
import reviews from "../repository/reviews";

const Reviews: React.FC = () => {
  return (
    <div
      id="product"
      className="md:w-3/4 bg-white max-h-[500px] overflow-auto text-black sm:w-full"
    >
      <div className="p-5">
        <h1 className="bg-black text-white inline-block p-5">Reviews</h1>
      </div>
      <ul className="p-5">
        {reviews.map((review) => (
          <li className="inline-block p-1 hover:bg-gray-100 cursor-pointer">
            {review.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
