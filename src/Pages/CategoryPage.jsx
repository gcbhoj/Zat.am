import React, { useEffect, useState } from "react";
import { GameCategory } from "../Models/GameCategory";
import { fetchByCategory } from "../services/JsonDataService";
import GameDisplay from "../components/GameDisplay";
import { Link, useParams } from "react-router-dom";

const CategoryPage = () => {
  const { code } = useParams();
  const [games, setGames] = useState([]);
  const category = GameCategory.find((cat) => cat.code === code);

  useEffect(() => {
    const loadGames = async () => {
      if (code) {
        const data = await fetchByCategory(code);
        setGames(data);
      }
    };
    loadGames();
  }, [code]);
  if (!category) {
    return <div> Invalid Category: {code}</div>;
  }
  return (
    <>
      <div className="dark:border-gray-400">
        <h3 className="text-2xl font-serif dark:text-gray-400 flex justify-center italic tracking-[1.25px] animate-bounce">
          {category.label} ({category.code})
        </h3>
      </div>
      {games.length === 0 ? (
        <p>NO GAMES FOUND IN THIS CATEGORY</p>
      ) : (
        <div className="m-0.5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {games.map((game) => (
            <GameDisplay key={game.gameId} game={game} />
          ))}
        </div>
      )}
      <div className="h-[2px] my-4 mx-5 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />
    </>
  );
};

export default CategoryPage;
