import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";
import ColorModeToggle from "../components/ColorModeToggle";

const GamePage = () => {
  return (
    <>
      <div>
        <ColorModeToggle />
      </div>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background animation layer */}
        <AnimatedBackground/>
        {/* Foreground content layer */}
        <div className="relative z-10 w-full h-12 rounded-md mt-0 ">
          {/* Optional Navbar */}
          <Navbar />

          {/* Header or content block create a new div */}
        </div>
      </div>
    </>
  );
};

export default GamePage;
