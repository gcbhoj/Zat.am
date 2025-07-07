import React from "react";
import GameAnalytics from "./GameAnalytics";
import MoreButton from "../UIComponents/MoreButton";
import { Link } from "react-router-dom";
import UserAnalytics from "./UserAnalytics"
const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 m-5">
      <div className="dark:text-gray-400 text-3xl">
        I will be the Admin's Panel. Displaying APP DATA
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />

      <div className="flex flex-col gap-0">
        <div className="flex justify-end mr-2">
          <MoreButton />
        </div>
        <UserAnalytics />
      </div>

      <div className="flex flex-col gap-0">
        <div className="flex justify-end mr-2">
          <Link to="/gameAnalytics" target="_blank">
            <MoreButton />
          </Link>
        </div>
        <GameAnalytics isDashboard={true} />
      </div>
    </div>
  );
};

export default DashboardPage;
