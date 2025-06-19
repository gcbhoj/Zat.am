import { CgProfile } from "react-icons/cg";
import Button from "../UIComponents/Button";
import DateTimeComponent from "./DateTimeComponent";
import { useEffect, useRef, useState } from "react";

const ProfileComponent = () => {

    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const profileButtonRef = useRef(null);
    const [dropDownPos, setDropDownPos] = useState({ top: 10, right: 100 });

    useEffect(() => {
        if (isProfileMenuOpen && profileButtonRef.current) {
            const rect = profileButtonRef.current.getBoundingClientRect();

            setDropDownPos({
                top: rect.bottom + window.scrollX+5,
                right:window.innerHeight-rect.right-window.scrollX-20
            })
        }
    },[isProfileMenuOpen])

  return (
    <div className="border border-blue-400 w-24 h-36 sm:w-24 sm:h-36 md:w-36 md:h-36 flex flex-col">
      <div className="relative">
        <Button
          ref={profileButtonRef}
          onClick={() => setIsProfileMenuOpen((prev) => !prev)}
          margin="m-0.5"
          icon={
            <CgProfile className="text-6xl sm:text-6xl md:text-7xl dark:text-stone-600 text-zinc-400" />
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
                      <button/>
          </div>
        )}
      </div>

      <hr className="h-1 rounded-md mx-0.5 dark:bg-amber-800 bg-gradient-to-r from-sky-500 from-10% via-lime-500 via-30% to-violet-600 to-90% ... rotate-x-180" />
      <DateTimeComponent />
    </div>
  );
};

export default ProfileComponent;
