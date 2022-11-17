import React from "react";

const Button = ({ onClick, color, text, className = "" }) => {
  return (
    <button
      className={`${className} bg-[${color}] rounded-[13px] text-white text-[32px]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
