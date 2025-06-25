import { useEffect, useState } from "react";
import { fetchByCategory } from "../services/JsonDataService";
import{GameCategory} from "../Models/GameCategory"

const CategoryDisplayContainer = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchByCategory("TA");
      setGames(data);
    };

    loadGames();
  }, []);

  return (
    <div className="border dark:border-gray-400 m-1 flex flex-col p-4">
      <h3 className="text-lg font-semibold mb-2">Category Name: TA</h3>

      <ul className="list-disc ml-4">
        {games.map((game) => (
          <li key={game.gameId}>{game.gameName}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryDisplayContainer;
