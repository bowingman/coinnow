import React from "react";

const TextArea = ({ className = "", name, value, placeholder }) => {
  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        className={`${className} bg-[#0C0C0C] text-white`}
      >
        {value}
      </textarea>
    </div>
  );
};

export default TextArea;
