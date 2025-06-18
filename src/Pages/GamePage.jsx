import AnimatedBackground from "../components/AnimatedBackground";
import Navbar from "../components/Navbar";

const GamePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background animation layer */}
      <AnimatedBackground />

      {/* Foreground content layer */}
      <div className="relative z-10 w-full h-12 rounded-md mt-0 ">
        {/* Optional Navbar */}
        <Navbar />

        {/* Header or content block create a new div */}

      </div>
    </div>
  );
};

export default GamePage;
