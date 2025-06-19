import React from "react";

const LogoContainer = () => {
  return (
    <div className="hidden md:flex border border-amber-600 mr-5 rounded-4xl items-center justify-center md:w-36 md:h-24">
      <img
        src="/images/zatam.png"
        alt="Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default LogoContainer;
