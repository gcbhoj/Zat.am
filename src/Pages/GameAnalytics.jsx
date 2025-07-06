import React, { useEffect, useState } from "react";
import TotalScreenTimeByGame from "../Charts/Games/TotalScreenTimeByGame";
import TotalPlayCountByGame from "../Charts/Games/TotalPlayCountByGame";
import TotalStarsByGame from "../Charts/Games/TotalStarsByGame";
import LastPlayedDataByGame from "../Charts/Games/LastPlayedDataByGame";
import GamesAndHighScores from "../Charts/Games/GamesAndHighScores";

const GameAnalytics = ({ isDashboard = false }) => {
  const [dashboardCharts, setDashboardCharts] = useState([]);

  useEffect(() => {
    const allCharts = [
      <TotalScreenTimeByGame key="Total Screen Time" />,
      <TotalPlayCountByGame key="Times Played" />,
      <TotalStarsByGame key="Total Stars" />,
      <LastPlayedDataByGame key="Last Played" />,
      <GamesAndHighScores key="High Score Data" />,
    ];

    // Show only 3 on dashboard, else show all
    const visibleCharts = isDashboard ? allCharts.slice(0, 3) : allCharts;

    setDashboardCharts(visibleCharts);
  }, [isDashboard]);

  return (
    <>
      <h3 className="dark:text-gray-300 flex justify-center font-serif text-[20px] italic animate-bounce tracking-[1.75px] mt-0.5 z-20 mb-2">
        Game Engagement Insights
      </h3>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 ml-5 mr-5 p-1">
        {dashboardCharts}
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />
    </>
  );
};

export default GameAnalytics;
