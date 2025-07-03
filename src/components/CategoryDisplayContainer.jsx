import { GameCategory } from "../Models/GameCategory";
import { fetchByCategory } from "../services/JsonDataService";
import { useEffect, useState } from "react";
import MoreButton from "../UIComponents/MoreButton";
import GameDisplay from "./GameDisplay";
import { Link } from "react-router-dom";

const CategoryDisplayContainer = ({ isHome = false }) => {
  const [gamesByCategory, setGamesByCategory] = useState({});

  useEffect(() => {
    const loadGames = async () => {
      const result = {};
      for (const category of GameCategory) {
        const games = await fetchByCategory(category.code);
        result[category.code] = isHome ? games.slice(0, 4) : games;
      }
      setGamesByCategory(result);
    };

    loadGames();
  }, [isHome]);

  return (
    <div>
      {GameCategory.map(({ code, label }) => (
        <div key={code} className="m-0.5 rounded-xl mt-5">
          <h3 className="text-xl font-semibold mb-4 font-serif flex justify-center animate-bounce">
            {label} ({code})
          </h3>

          {gamesByCategory[code]?.length > 0 ? (
            <div className="m-0.5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ">
              {gamesByCategory[code].map((game) => (
                <GameDisplay key={game.gameId} game={game} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              No games available in this category.
            </p>
          )}
          <div className="flex justify-end mr-2">
            <Link to={`/category/${code}`}>
              <MoreButton />
            </Link>
          </div>

          <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />
        </div>
      ))}
    </div>
  );
};

export default CategoryDisplayContainer;
