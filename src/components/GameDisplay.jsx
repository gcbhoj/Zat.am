import React from "react";
import StarRating from "../UIComponents/StarRating";
import { Link } from "react-router-dom";

const GameDisplay = ({ game }) => {
  return (
    <Link to={game.gameLink} target="blank" className="z-10">
      <div className="m-5 w-40 sm:w-48 md:w-56 lg:w-64 h-56 rounded-2xl flex flex-col justify-center items-center dark:text-gray-400 shadow-md hover:shadow-lg transition overflow-hidden hover:dark:border-amber-400 hover:-translate-y-1 hover:scale-110 cursor-pointer">
        {/* Game Image */}
        <div className="border m-2 h-36 w-36 sm:w-40 rounded-xl overflow-hidden">
          <img
            src={game.gameImage}
            alt={game.gameName}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Game Info */}
        <div className="text-center mt-1 justify-center items-center">
          <p className="font-serif capitalize text-xl">{game.gameName}</p>
          <StarRating rating={game.rating} />
        </div>
      </div>
    </Link>
  );
};

export default GameDisplay;
