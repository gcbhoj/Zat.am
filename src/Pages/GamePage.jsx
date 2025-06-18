import { useEffect, useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import LightBackground from "../components/LightBackground";
import Navbar from "../components/Navbar";
import ColorModeToggle from "../components/ColorModeToggle";

const GamePage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${
        isDark ? "" : "bg-white"
      }`}
    >
      {/* Backgrounds */}
      {isDark ? <AnimatedBackground /> : <LightBackground />}

      {/* Foreground content */}
      <div className="relative z-10 w-full flex flex-col gap-4">
        <div className="self-end">
          <ColorModeToggle />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Other content can go here */}
      </div>
    </div>
  );
};

export default GamePage;
