import { CgProfile } from "react-icons/cg";
import { GiHomeGarage } from "react-icons/gi";
import Button from "../UIComponents/Button";
import DateTimeComponent from "./DateTimeComponent";
import { useEffect, useRef, useState } from "react";

const ProfileComponent = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileButtonRef = useRef(null);
  const [dropDownPos, setDropDownPos] = useState({ top: 0, right: 100 });

  useEffect(() => {
    if (isProfileMenuOpen && profileButtonRef.current) {
      const rect = profileButtonRef.current.getBoundingClientRect();
      if (window.innerWidth < 768) {
        // Small screens – keep original positioning
        setDropDownPos({
          top: rect.bottom + window.scrollY,
          right: window.innerWidth + rect.right,
        });
      } else {
        // Medium and larger screens – position to the left
        setDropDownPos({
          top: rect.top + window.scrollY,
          right: window.innerWidth - rect.right, // 10px buffer
        });
      }
    }
  }, [isProfileMenuOpen]);

  return (
    <div className="border border-blue-400 sm:w-24 sm:h-[115px] md:w-36 md:h-[118px] flex flex-col">
      <div className="relative flex justify-center">
        <Button
          ref={profileButtonRef}
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          margin="m-0.5"
          icon={
            <CgProfile className="text-4xl sm:text-6xl md:text-6xl dark:text-stone-600 text-green-700 " />
          }
        />
        {isProfileMenuOpen && (
          <div
            className="absolute w-24 h-24 border border-amber-700"
            style={{
              top: dropDownPos.top,
              right: dropDownPos.right,
              position: "absolute",
            }}
            onMouseLeave={() => setIsProfileMenuOpen(false)}
          >
            <button />
          </div>
        )}
      </div>

      <hr className="h-1 rounded-md mx-0.5 dark:bg-amber-800 bg-gradient-to-r from-sky-500 from-10% via-lime-500 via-30% to-violet-600 to-90%" />
      <DateTimeComponent />
    </div>
  );
};

export default ProfileComponent;
