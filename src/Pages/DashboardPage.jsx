import React from "react";
import GameAnalytics from "./GameAnalytics";
import MoreButton from "../UIComponents/MoreButton";
import { Link, NavLink } from "react-router-dom";
import UserAnalytics from "./UserAnalytics";
import Button from "../UIComponents/Button";
const DashboardPage = () => {
  return (
    <div className="flex flex-col gap-4 m-5">
      <div className="flex justify-end mr-1">
        <Link to="/cp">
          <Button
            icon={
              <img
                className="m-2"
                src="https://icons.iconarchive.com/icons/iconmoon/viva/128/Control-Panel-icon.png"
                width="35"
              ></img>
            }
            label="Control Panel"
            border="rounded-xl shadow-xl"
            height="h-16"
            width="w-52"
            background="bg-neutral-400"
            hoverBackground="hover:bg-gray-500"
          />
        </Link>
      </div>
      <div className="dark:text-gray-400 text-3xl">
        {/* I will be the Admin's Panel. Displaying APP DATA */}
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />

      <div className="flex flex-col gap-0">
        <div className="flex justify-end mr-2">
          <NavLink to="/userAnalytics" target="_blank">
            <MoreButton />
          </NavLink>
        </div>
        <UserAnalytics isDashboard={true} />
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
