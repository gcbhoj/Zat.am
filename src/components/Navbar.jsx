import Button from "../UIComponents/Button";
import { FaGamepad } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import LogoContainer from "./LogoContainer";
import ProfileComponent from "./ProfileComponent";
import { SiLeaderprice } from "react-icons/si";
import { RiDashboard2Line } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";

const Navbar = () => {
  return (
    <div className="relative border border-amber-400 h-48 rounded-3xl m-0.5 z-10 flex flex-wrap items-start justify-between p-4">
      <LogoContainer />

      {/* Buttons Container (bottom-centered) */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-evenly border border-stone-500 m-1">
        {/* Desktop Buttons */}
        <div className="hidden sm:flex space-x-4 border border-amber-800 md:flex">
          <Button
            border="border-1"
            background="bg-gray-300"
            label="home"
            width="w-20"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            border="border-1"
            background="bg-gray-300"
            label="games"
            width="w-28"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            border="border-1"
            background="bg-gray-300"
            label="leaderboard"
            width="w-28"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            border="border-1"
            background="bg-gray-300"
            label="Dashboard"
            width="w-24"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            border="border-1"
            background="bg-gray-300"
            label="about us"
            width="w-24"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
        </div>

        {/* Mobile Icon Buttons */}
        <div className="flex sm:hidden space-x-4">
          <Button
            width="w-10"
            height="h-10"
            icon={<GiHomeGarage className="text-4xl" />}
            background="bg-gray-500"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            width="w-10"
            height="h-10"
            icon={<FaGamepad className="text-4xl" />}
            background="bg-gray-500"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            width="w-10"
            height="h-10"
            icon={<SiLeaderprice className="text-4xl" />}
            background="bg-gray-500"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            width="w-10"
            height="h-10"
            icon={<RiDashboard2Line className="text-4xl" />}
            background="bg-gray-500"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
          <Button
            width="w-10"
            height="h-10"
            icon={<FcAbout className="text-4xl" />}
            background="bg-gray-500"
            dark="dark:bg-amber-500"
            margin="mr-5"
          />
        </div>
      </div>

      {/* ProfileComponent pinned to top-right */}
      <div className="absolute top-2 right-4">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Navbar;
