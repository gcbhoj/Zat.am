import AnimatedBackground from "../components/AnimatedBackground";

const GamePage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-white text-4xl mb-2">hello world</h1>
          <h2 className="text-white text-xl">trial and error</h2>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
