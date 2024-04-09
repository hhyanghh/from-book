import React from "react";
import Button from "./components/UI/Button";

export default function AddQuote() {
  // Input field common classes
  const inputClasses =
    "shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";

  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="w-full max-w-xs mx-auto">
        <form className="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col ">
          <div className="mb-2">
            <input className={inputClasses} placeholder="Writer" type="text" />
          </div>
          <div className="mb-2">
            <textarea
              className={`${inputClasses} resize-none`}
              placeholder="구절을 작성해주세요."
              rows="6"
            />
          </div>
          <div className="mb-4">
            <input
              className={inputClasses}
              placeholder="출처 (책, 영화, ...)"
              type="text"
            />
          </div>
          <Button text="Save" type="submit" />
        </form>
      </div>
    </div>
  );
}
