import { useState } from "react";
import Button from "../UIComponents/Button";
import { IoMoonOutline } from "react-icons/io5";
import { GiSunflower } from "react-icons/gi";

const ColorModeToggle = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <div className="h-10 flex items-center rounded-full mt-1 justify-end mr-5 mb-1">
      <Button
        width="w-10"
        height="h-10"
        icon={isDark ? <IoMoonOutline /> : <GiSunflower />}
        onClick={toggleTheme}
        background="bg-gray-600"
      />
    </div>
  );
};

export default ColorModeToggle;
