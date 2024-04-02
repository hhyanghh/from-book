import React from "react";

const Button = ({ text, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="py-2 px-4 font-semibold rounded-lg shadow-md text-secondary bg-primary hover:brightness-110"
    >
      {text}
    </button>
  );
};

export default Button;
