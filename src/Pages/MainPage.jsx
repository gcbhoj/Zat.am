import { useEffect, useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import LightBackground from "../components/LightBackground";
import Navbar from "../components/Navbar";
import ColorModeToggle from "../components/ColorModeToggle";

const MainPage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme state
    setIsDark(document.documentElement.classList.contains("dark"));

    // Observe theme changes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Clean up observer
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className={`relative  ${isDark ? "" : "bg-neutral-100"}`}>
        {/* Background based on theme */}
        {isDark ? <AnimatedBackground /> : <LightBackground />}

        {/* Foreground content */}
        <div className="relative z-10 w-full flex flex-col mt-1">
          {/* Color Mode Toggle aligned right */}
          <div className="self-end w-10 h-10">
            <ColorModeToggle />
          </div>

          {/* Navbar */}
          <Navbar />
        </div>
      </div>
      <div className="h-[2px] my-4 mx-10 rounded-full bg-gradient-to-r from-sky-100 to-indigo-300 " />
    </>
  );
};

export default MainPage;
