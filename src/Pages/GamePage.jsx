import { useEffect, useState } from "react";
import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import ColorModeToggle from "../components/ColorModeToggle";

const GamePage = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initialize theme state
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for theme changes
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
      {/* Show animated stars only in dark mode */}
      {isDark && <AnimatedBackground />}

      {/* Top right theme toggle button */}
      <div className="absolute top-2 right-2 z-20">
        <ColorModeToggle />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full h-12 mt-0">
        <Navbar />
      </div>
    </div>
  );
};

export default GamePage;
