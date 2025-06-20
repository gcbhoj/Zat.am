import { NavLink } from "react-router-dom";

const LogoContainer = () => {
  return (
    <div className="hidden md:flex mr-5 rounded-4xl items-center justify-center md:w-36 md:h-24">
      <NavLink to="/">
        <img
          src="/images/zatam.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </NavLink>
    </div>
  );
};

export default LogoContainer;
