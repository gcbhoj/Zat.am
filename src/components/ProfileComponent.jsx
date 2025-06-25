import { CgProfile } from "react-icons/cg";
import { GiCaptainHatProfile } from "react-icons/gi";
import { SiSimplelogin, SiGnuprivacyguard } from "react-icons/si";
import Button from "../UIComponents/Button";
import DateTimeComponent from "./DateTimeComponent";
import { useRef, useState } from "react";

const ProfileComponent = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileButtonRef = useRef(null);

  return (
    <div className="sm:w-24 sm:h-[115px] md:w-24 md:h-[118px] flex flex-col">
      <div className="relative flex justify-center">
        <Button
          ref={profileButtonRef}
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          margin="m-0.5"
          icon={
            <CgProfile className="text-4xl sm:text-6xl md:text-6xl dark:text-amber-500 hover:text-violet-500" />
          }
        />
        {isProfileMenuOpen && (
          <div
            className="absolute md:top-0 mt-2 z-50 flex flex-col items-end 
             sm:right-15 md:right-20 lg:right-20 sm:top-1"
            onMouseLeave={() => setIsProfileMenuOpen(false)}
          >
            {/* Desktop Dropdown */}
            <div className="hidden md:flex flex-col transition-all">
              {[
                { label: "Profile" },
                { label: "Login" },
                {
                  label: "Sign Up",
                },
              ].map((item, index) => (
                <Button
                  key={index}
                  width="w-20"
                  height="h-[30px]"
                  background="bg-gray-300"
                  label={item.label}
                  margin="mt-1"
                  dark="dark:bg-amber-400"
                />
              ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="flex md:hidden flex-col transition-all">
              {[
                {
                  icon: <GiCaptainHatProfile className="text-2xl" />,
                  label: "Profile",
                },
                {
                  icon: <SiSimplelogin className="text-2xl" />,
                  label: "Login",
                },
                {
                  icon: <SiGnuprivacyguard className="text-2xl" />,
                  label: "Sign UP",
                },
              ].map((item, index) => (
                <div className="relative group" key={index}>
                  <Button
                    width="w-8"
                    height="h-8"
                    background="text-neutral-900"
                    darkText="dark:text-amber-500"
                    hoverBackground="hover:text-violet-500"
                    margin="mr-5"
                    icon={item.icon}
                  />
                  <span className="absolute right-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-[12px] text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10 italic tracking-[1.75px]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <hr className="h-1 sm:w-24 md:w-24 rounded-md mx-0.5 bg-gradient-to-r from-sky-500 via-lime-500 to-violet-600" />
      <DateTimeComponent />
    </div>
  );
};

export default ProfileComponent;
