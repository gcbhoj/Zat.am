import React, { useState } from "react";
import LeaderBoardAllGames from "../components/LeaderBoardAllGames";
import LeaderBoardByGame from "../components/LeaderBoardByGame";
import TopPlayers from "../components/TopPlayers";
const views = {
  topPlayers: {
    label: "Top Players",
    component: <TopPlayers />,
  },
  all: {
    label: "All Games",
    component: <LeaderBoardAllGames />,
  },
  byGame: {
    label: "By Game",
    component: <LeaderBoardByGame />,
  },
};

const LeaderBoardPage = () => {
  const [activeView, setActiveView] = useState(Object.keys(views)[0]);

  return (
    <>
      <div className="dark:text-gray-300 p-5 flex flex-col items-center">
        {/* Text switcher */}
        <div className="flex gap-6 text-xl font-semibold mb-6 flex-wrap justify-center">
          {Object.entries(views).map(([key, { label }]) => (
            <span
              key={key}
              onClick={() => setActiveView(key)}
              className={`cursor-pointer transition underline-offset-4 ${
                activeView === key
                  ? "underline text-blue-600 dark:text-blue-400"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {label}
            </span>
          ))}
        </div>

        {/* Render selected view */}
        <div className="w-full max-w-5xl">{views[activeView].component}</div>
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />
    </>
  );
};

export default LeaderBoardPage;
