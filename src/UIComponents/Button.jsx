import React from "react";

const Button = ({
  label,
  height = "",
  width = "",
  background = "",
  icon = null,
  margin = "m-0",
  border = "",
  hoverBackground = "hover:text-sky-600",
  onClick,
  dark = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${width} ${height} ${background} ${margin}
        rounded-2xl
        ${border}
        active:border-blue-600 active:shadow-gray-600 active:shadow
        font-serif tracking-[.13em] ${hoverBackground}
        capitalize hover:italic active:scale-95 hover:scale-105
        flex items-center justify-center
        text-[13px] font-semibold ${dark}
      `}
    >
      {icon && (
        <span className="text-4xl flex items-center justify-center">
          {icon}
        </span>
      )}
      {label}
    </button>
  );
};

export default Button;
