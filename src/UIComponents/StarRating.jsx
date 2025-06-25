import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating = 0 }) => {
  const starSizeClasses =
    "text-xl mt-1";

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <FaStar
            key={i}
            className={`text-yellow-400 ${starSizeClasses}`}
          />
        );
      } else if (rating >= i - 0.5) {
        stars.push(
          <FaStarHalfAlt
            key={i}
            className={`text-yellow-400 ${starSizeClasses}`}
          />
        );
      } else {
        stars.push(
          <FaRegStar
            key={i}
            className={`text-yellow-400 ${starSizeClasses}`}
          />
        );
      }
    }
    return stars;
  };

  return <div className="flex justify-center font-serif">{renderStars()}</div>;
};

export default StarRating;
