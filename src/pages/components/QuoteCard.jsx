import React from "react";
import { FiHeart, FiPlusCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const QuoteCard = ({ quote, source }) => {
  const navigate = useNavigate();
  const handlePlusClick = () => {
    navigate("/quotes/add");
  };
  return (
    <div className="max-w-xs mx-auto my-8 p-8 bg-white rounded-lg shadow-lg flex flex-col justify-between h-full">
      <div className="text-center">
        <p className="text-lg text-gray-800 font-semibold">{quote}</p>
        <p className="text-sm text-gray-600 mt-2">{source}</p>
      </div>
      <div className="flex justify-end space-x-2 mt-4 text-gray-600">
        <button type="button" className=" hover:text-primary">
          <FiHeart size="24" />
        </button>
        <button
          type="button"
          className=" hover:text-primary"
          onClick={handlePlusClick}
        >
          <FiPlusCircle size="24" />
        </button>
      </div>
    </div>
  );
};

export default QuoteCard;
