import { useEffect, useState } from "react";
import Button from "../UIComponents/Button";
import InputBox from "../UIComponents/InputBox";
import { BsSearchHeart } from "react-icons/bs";
import { fetchByName } from "../services/JsonDataService";
import GameDisplay from "../components/GameDisplay";
import { AiOutlineClose } from "react-icons/ai";

const SearchBarComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);

  const handleSearch = async () => {
    const data = await fetchByName(searchQuery);
    setGames(data);
    console.log(data);
  };

  useEffect(() => {
    if (searchQuery.trim()) {
      handleSearch();
    } else {
      setGames([]);
    }
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery("");
    setGames([]);
  };

  return (
    <div className="mt-1 m-0.5 mb-0.5 flex flex-col rounded-lg">
      <div className="h-[105px] rounded-lg flex flex-wrap items-center justify-center gap-2 p-4 z-10 italic tracking-[1.75px]">
        <InputBox
          type="text"
          name="searchGames"
          placeholder="Search your favourite games here"
          label="Search your favourite games"
          width="w-[175px] sm:w-96 md:w-[420px]"
          onChange={(e) => setSearchQuery(e.target.value)}
          value ={searchQuery}
        />
      </div>

      {searchQuery.trim() && (
        <>
          <div className="flex justify-end mr-5">
            <Button
              width="w-8"
              height="h-8"
              background="text-zinc-400"
              icon={
                <AiOutlineClose className="dark:text-gray-400 hover:text-zinc-700 text-[25px] dark:hover:text-sky-400" />
              }
              onClick={handleClear}
            />
          </div>

          <div className="px-4 mt-4">
            {games.length > 0 ? (
              <div className="m-0.5 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {games.map((game) => (
                  <GameDisplay key={game.gameId} game={game} />
                ))}
              </div>
            ) : (
              <div className="text-center mt-4 text-gray-600 dark:text-gray-300">
                <p>
                  The game you are looking for is currently unavailable with
                  us...
                </p>
                <p>Sorry for the inconvenience.</p>
                <p>
                  Your request has been saved. If feasible, we will publish the
                  game soon.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchBarComponent;
