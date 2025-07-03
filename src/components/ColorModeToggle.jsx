import { useState, useEffect } from "react";
import Button from "../UIComponents/Button";
import { IoMoonOutline } from "react-icons/io5";
import { GiSunflower } from "react-icons/gi";

const ColorModeToggle = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const nowDark = !isDark;
    document.documentElement.classList.toggle("dark", nowDark);
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    setIsDark(nowDark);
  };

  return (
    <div className="h-10 flex items-center rounded-full mt-1 justify-end mr-5 mb-1">
      <Button
        width="w-10"
        height="h-10"
        icon={isDark ? <IoMoonOutline className="dark:text-gray-400" /> : <GiSunflower className="text-yellow-400" />}
        onClick={toggleTheme}
        hoverBackground= "null"
      />
    </div>
  );
};

export default ColorModeToggle;
