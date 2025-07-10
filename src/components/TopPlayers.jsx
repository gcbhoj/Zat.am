import { useEffect, useState } from "react";
import { byUser } from "../services/LeaderBoardService.js";

const TopPlayers = () => {
  const [gameData, setGameData] = useState([]);

  const fetchGameData = async () => {
    try {
      const data = await byUser();
      setGameData(data);
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
    <div className="m-5 p-5 flex flex-col items-center dark:text-gray-400 rounded-xl  dark:border-1 shadow-lg bg-neutral-100 dark:bg-transparent">
      <h2 className="text-3xl font-serif mb-4 capitalize text-center dark:text-gray-400 tracking-[1.75px] flex flex-wrap border-b ">
        Top Players
      </h2>

      <div className="max-w-4xl w-full">
        <ul>
          {/* Table Header */}
          <li className="grid grid-cols-5 font-semibold py-2 px-4 font-serif tracking-[1.25px] dark:text-gray-400 border-b border-gray-300 sm:text-2xl">
            <span className="flex justify-center">Rank</span>
            <span className="flex justify-center sm:text-xl md:text-2xl">
              Player
            </span>
            <span className="flex justify-center">Score</span>
            <span className="flex justify-center sm:text-xl md:text-2xl">
              Game
            </span>
            <span className="flex justify-center">Date</span>
          </li>

          {/* Leaderboard Rows */}
          {gameData.map((item, index) => (
            <li
              key={index}
              className={`grid grid-cols-5 py-2 px-4 text-center font-serif text-[18px] items-center m-5 dark:text-gray-300 italic dark:text-shadow-gray-500`}
            >
              <span className="flex justify-center">{getRankLabel(index)}</span>
              <span className="capitalize flex justify-center">
                {item.userId}
              </span>
              <span className="flex justify-center">{item.score}</span>
              <span className="flex justify-center capitalize">
                {item.gameName}
              </span>

              <span className="flex justify-center">
                {new Date(item.achievedOn).toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopPlayers;
