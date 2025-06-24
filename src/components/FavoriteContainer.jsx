import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchByRating } from "../services/JsonDataService";
import GameDisplay from "../components/GameDisplay";

const FavoriteContainer = () => {
  const [favoriteGames, setFavoriteGames] = useState([]);
  const navigate = useNavigate();
  const visibleCount = 5;

  useEffect(() => {
    const loadGames = async () => {
      const games = await fetchByRating();
      setFavoriteGames(games);
    };
    loadGames();
  }, []);

  return (
    <div className="border border-gray-300 m-0.5 flex flex-col">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 p-2">
        {favoriteGames.slice(0, visibleCount).map((game) => (
          <GameDisplay key={game.gameId} game={game} />
        ))}
      </div>

      {favoriteGames.length > visibleCount && (
        <button
          className="self-center my-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => navigate("/favorites")}
        >
          Show All Favorites
        </button>
      )}
    </div>
  );
};

export default FavoriteContainer;
