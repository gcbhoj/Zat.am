import { useState, useEffect } from "react";
import { fetchByRating } from "../services/JsonDataService";
import GameDisplay from "../components/GameDisplay";

const AllFavoritePage = ({ isHome = false }) => {
  const [favoriteGames, setFavoriteGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const games = await fetchByRating();
      setFavoriteGames(isHome ? games.slice(0, 4) : games);
    };
    loadGames();
  }, [isHome]);

  return (
    <>
      <div className="dark:text-gray-300 flex justify-center font-serif text-[20px] italic animate-bounce tracking-[1.75px] mt-0.5 z-20">
        Our Top Rated Games
      </div>
      <div className="m-0.5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {favoriteGames.map((games) => (
          <GameDisplay key={games.gameId} game={games} />
        ))}
      </div>
    </>
  );
};

export default AllFavoritePage;
