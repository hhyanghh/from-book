import React, { useState, useEffect } from "react";
import { addQuote } from "../api/firebase";
import { useUser } from "../context/UserContext";
import Button from "./components/UI/Button";

export default function AddQuote() {
  const { user } = useUser();
  const [writer, setWriter] = useState(user ? user.displayName : "");
  const [quote, setQuote] = useState("");
  const [source, setSource] = useState("");
  // Input field common classes
  const inputClasses =
    "shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
  useEffect(() => {
    if (user) {
      setWriter(user.displayName);
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const quoteData = {
      writer,
      quote,
      source,
    };

    try {
      await addQuote(quoteData);
      setWriter(user ? user.displayName : "");
      setQuote("");
      setSource("");
      alert("Quote saved successfully!");
    } catch (error) {
      console.error("Error adding quote:", error);
      alert("Failed to save quote.");
    }
  };
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="w-full max-w-xs mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col "
        >
          <div className="mb-2">
            <input
              value={writer}
              onChange={(e) => setWriter(e.target.value)}
              className={inputClasses}
              placeholder="Writer"
              type="text"
            />
          </div>
          <div className="mb-2">
            <textarea
              value={quote}
              onChange={(e) => setQuote(e.target.value)}
              className={`${inputClasses} resize-none`}
              placeholder="구절을 작성해주세요."
              rows="6"
            />
          </div>
          <div className="mb-4">
            <input
              value={source}
              onChange={(e) => setSource(e.target.value)}
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
