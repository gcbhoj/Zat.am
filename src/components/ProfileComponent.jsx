import { CgProfile } from "react-icons/cg";
import { GiCaptainHatProfile } from "react-icons/gi";
import { SiSimplelogin, SiGnuprivacyguard } from "react-icons/si";
import Button from "../UIComponents/Button";
import DateTimeComponent from "./DateTimeComponent";
import { useEffect, useRef, useState } from "react";

const ProfileComponent = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const [dropDownPos, setDropDownPos] = useState({ top: 0, right: 70 });

  useEffect(() => {
    if (isProfileMenuOpen && profileButtonRef.current) {
      const rect = profileButtonRef.current.getBoundingClientRect();
      if (window.innerWidth < 768) {
        // Small screens – position dropdown below the button
        setDropDownPos({
          top: rect.bottom + window.scrollY,
          right: -10,
        });
      } else {
        // Medium and larger screens – position to the left
        setDropDownPos({
          top: rect.top + window.scrollY,
          right: window.innerWidth - rect.right,
        });
      }
    }
  }, [isProfileMenuOpen]);

  return (
    <div className="sm:w-24 sm:h-[115px] md:w-36 md:h-[118px] flex flex-col">
      <div className="relative flex justify-center">
        <Button
          ref={profileButtonRef}
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          margin="m-0.5"
          icon={
            <CgProfile className="text-4xl sm:text-6xl md:text-6xl dark:text-stone-600 text-green-700" />
          }
        />
        {isProfileMenuOpen && (
          <div
            className="absolute md:w-24 md:h-24 flex justify-center"
            style={{
              top: dropDownPos.top,
              right: dropDownPos.right,
            }}
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
                    width="w-10"
                    height="h-10"
                    background="text-neutral-900"
                    dark="dark:text-amber-500"
                    margin="mr-5"
                    icon={item.icon}
                  />
                  <span className="absolute left-full top-1/5 -translate-y-1/2 ml-1 px-1 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <hr className="h-1 rounded-md mx-0.5 bg-gradient-to-r from-sky-500 via-lime-500 to-violet-600" />
      <DateTimeComponent />
    </div>
  );
};

export default ProfileComponent;
