import Button from "../UIComponents/Button";
import { FaGamepad } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
import LogoContainer from "./LogoContainer";
import ProfileComponent from "./ProfileComponent";
import { SiLeaderprice } from "react-icons/si";
import { RiDashboard2Line } from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="relative h-36 rounded-3xl m-0.5 z-10 px-4 flex items-center justify-between ">
      {/* Left: Logo */}
      <LogoContainer />

      {/* Center: Button Group */}
      <div className="flex flex-col items-center justify-center flex-grow mr-20 bg-transparent">
        {/* Desktop Buttons */}
        <div className="hidden sm:flex transition-all justify-center bg-transparent animate-pulse">
          {[
            { label: "home", width: "w-20", margin: "mr-2 ml-2", to: "/" },
            {
              label: "collection",
              width: "w-20",
              to: "/games",
              margin: "mr-5",
            },
            {
              label: "leaderboard",
              width: "w-28",
              to: "/leaderboard",
              margin: "mr-5",
            },
            {
              label: "dashboard",
              width: "w-24",
              margin: "mr-5",
              to: "/dashboard",
            },
            {
              label: "about us",
              width: "w-24",
              margin: "mr-5",
              to: "/aboutus",
            },
          ].map((item, index) => (
            <div key={index}>
              <NavLink to={item.to}>
                <Button
                  label={item.label}
                  width={item.width}
                  darkText="dark:text-gray-500"
                  height="h-12"
                  darkBackground="hover:bg-neutral-600"
                  margin={item.margin}
                  hoverBackground="hover:text-amber-600"
                />
              </NavLink>
            </div>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="flex sm:hidden transition-all justify-center">
          {[
            {
              icon: <GiHomeGarage className="text-4xl" />,
              to: "/",
              label: "Home",
              margin: "mr-5 ml-5",
            },
            {
              icon: <FaGamepad className="text-4xl" />,
              to: "/games",
              label: "Games",
              margin: "mr-5",
            },
            {
              icon: <SiLeaderprice className="text-4xl" />,
              to: "/leaderboard",
              label: "Leaderboard",
              margin: "mr-5",
            },
            {
              icon: <RiDashboard2Line className="text-4xl" />,
              to: "/dashboard",
              label: "Dashboard",
              margin: "mr-5",
            },
            {
              icon: <FcAbout className="text-4xl" />,
              to: "/aboutus",
              label: "About US",
              margin: "mr-10",
            },
          ].map((item, index) => (
            <div className={`relative group ${item.margin}`} key={index}>
              <Link to={item.to}>
                <Button
                  width="w-10"
                  height="h-10"
                  darkText="dark:text-amber-500"
                  hoverBackground="hover:text-violet-500"
                  icon={item.icon}
                />
                <span className="absolute bottom-full right-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-[10px] text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 italic tracking-[1.75px]">
                  {item.label}
                </span>
              </Link>
            </div>
          ))}
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
