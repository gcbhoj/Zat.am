import { useEffect, useState } from "react";
import { fetchGames } from "../services/JsonDataService";
import GameDisplay from "../components/GameDisplay";

const GamesPage = () => {
  const [myGames, setMyGames] = useState([]);

  useEffect(() => {
    const loadGames = async () => {
      const data = await fetchGames();
      setMyGames(data);
      console.log(data);
    };
    loadGames();
  }, []);

  return (
    <>
      <h3 className="text-2xl font-serif dark:text-gray-400 flex justify-center italic tracking-[1.25px] animate-bounce">
        Our Collection
      </h3>

      <div className="m-0.5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {myGames.map((game) => (
          <GameDisplay key={game.gameId} game={game} />
        ))}
      </div>
    </>
  );
};

export default GamesPage;
