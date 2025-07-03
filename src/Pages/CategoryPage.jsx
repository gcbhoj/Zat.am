import React, { useEffect, useState } from "react";
import { GameCategory } from "../Models/GameCategory";
import { fetchByCategory } from "../services/JsonDataService";
import GameDisplay from "../components/GameDisplay";
import MoreButton from "../UIComponents/MoreButton";
import { Link } from "react-router-dom";

const CategoryPage = ({ isHome = false }) => {
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
    <div className="p-4">
      {GameCategory.map(({ code, label }) => (
        <div key={code} className="mb-8 p-4 rounded-xl">
          <h3 className="text-xl font-semibold mb-4">
            {label} ({code})
          </h3>

          {gamesByCategory[code]?.length > 0 ? (
            <div className="m-0.5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {gamesByCategory[code].map((game) => (
                <GameDisplay key={game.gameId} game={game} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              No games available in this category.
            </p>
          )}
          <div className="flex justify-end mr-2 mt-0">
            <Link to={`/category/${code}`} target="_blank">
              <MoreButton />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
