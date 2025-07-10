import { useEffect, useState } from "react";
import { leaderBoardByGame } from "../services/LeaderBoardService";
import Button from "../UIComponents/Button";

const LeaderBoardByGame = () => {
  const [gameData, setGameData] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);

  const fetchGameData = async () => {
    try {
      const data = await leaderBoardByGame();
      console.log("gamedata:", data);
      setGameData(data);
      setSelectedGame(data[-1]); // Default to first game
    } catch (error) {
      console.error("Error fetching leaderboard data:", error);
    }
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  const getRankLabel = (index) => {
    switch (index) {
      case 0:
        return "🥇";
      case 1:
        return "🥈";
      case 2:
        return "🥉";
      default:
        return index + 1;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg">
      {/* Game List */}
      <div className="sm:w-1/3 border-r-2 pr-4">
        <h3 className="text-xl font-serif italic mb-3 underline underline-offset-4">
          Games
        </h3>
        <ul className="space-y-2">
          {gameData.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedGame(item)}
              className={`cursor-pointer p-2 rounded-xl dark:text-gray-400 capitalize text-lg font-serif italic text-center mb-10 border 
                ${
                  selectedGame?.gameName === item.gameName
                    ? "text-amber-550 border-blue-400 "
                    : "hover:text-amber-400 text-gray-950 border-gray-300"
                }`}
            >
              {item.gameName}
            </li>
          ))}
        </ul>
      </div>

      {/* Leaderboard */}
      <div className="flex-1 bg-zinc-100 rounded-xl shadow-2xl dark:bg-transparent rounded-xlpx-4 py-5">
        <h3 className="text-2xl font-serif mb-5 capitalize justify-center tracking-[1.25px] flex flex-wrap dark:text-gray-400 border-b border-gray-300 mt-5 ">
          {selectedGame?.gameName || "Select a game"}
        </h3>

        <div className="grid grid-cols-4 font-semibold py-2 font-serif tracking-wide text-center text-lg dark:text-gray-400 border-b mb-5 m-1">
          <span>Rank</span>
          <span>Player</span>
          <span>Score</span>
          <span>Date</span>
        </div>

        <ul>
          {selectedGame?.scoreBoard?.map((entry, index) => (
            <li
              key={index}
              className="grid grid-cols-4 py-2 text-center font-serif items-center text-gray-800 dark:bg-transparent dark:text-gray-300 border-1 rounded-xl mb-5 italic bg-zinc-100  shadow-2xl m-1 "
            >
              <span>{getRankLabel(index)}</span>
              <span className="capitalize">{entry.userId}</span>
              <span>{entry.score}</span>
              <span>
                {new Date(entry.timeStamp).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaderBoardByGame;
