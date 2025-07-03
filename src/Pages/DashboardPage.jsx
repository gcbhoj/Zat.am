import React from "react";
import GameAnalytics from "./GameAnalytics";

const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 m-5">
      <div className="dark:text-gray-400 text-3xl">
        I will be the Admin's Panel. Displaying APP DATA
      </div>
      <div>
        <GameAnalytics />
      </div>
    </div>
  );
};

export default DashboardPage;
