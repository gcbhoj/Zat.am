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
    <div className="relative border border-amber-400 h-36 rounded-3xl m-0.5 z-10 px-4 flex items-center justify-between">
      {/* Left: Logo */}
      <LogoContainer />

      {/* Center: Button Group */}
      <div className="flex flex-col items-center justify-center flex-grow mr-10">
        {/* Desktop Buttons */}
        <div className="hidden sm:flex transition-all justify-center">
          <Button
            background="bg-gray-300"
            label="home"
            width="w-20"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-2 ml-2"
          />
          <Button
            background="bg-gray-300"
            label="games"
            width="w-20"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-2"
          />
          <Button
            background="bg-gray-300"
            label="leaderboard"
            width="w-28"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-2"
          />
          <Button
            background="bg-gray-300"
            label="dashboard"
            width="w-24"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-2"
          />
          <Button
            background="bg-gray-300"
            label="about us"
            width="w-24"
            height="h-12"
            dark="dark:bg-amber-500"
            margin="mr-2"
          />
        </div>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden transition-all justify-center">
          <div className="relative group mr-5 ml-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<GiHomeGarage className="text-2xl" />}
              background="bg-neutral-900"
              dark="dark:bg-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Home
            </span>
          </div>
          <div className="relative group mr-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<FaGamepad className="text-2xl" />}
              background="bg-neutral-900"
              dark="dark:bg-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Games
            </span>
          </div>
          <div className="relative group mr-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<SiLeaderprice className="text-2xl" />}
              background="bg-neutral-900"
              dark="dark:bg-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Leaderboard
            </span>
          </div>
          <div className="relative group mr-5">
            <Button
              width="w-10"
              height="h-10"
              icon={<RiDashboard2Line className="text-2xl" />}
              background="bg-neutral-900"
              dark="dark:bg-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              Dashboard
            </span>
          </div>
          <div className="relative group mr-10">
            <Button
              width="w-10"
              height="h-10"
              icon={<FcAbout className="text-2xl" />}
              background="bg-neutral-900"
              dark="dark:bg-amber-500"
            />
            <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
              About us
            </span>
          </div>
        </div>
      </div>

      {/* Right: Profile */}
      <div className="absolute top-2 right-4">
        <ProfileComponent />
      </div>
    </div>
  );
};

export default Navbar;
