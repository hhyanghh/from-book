import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import fetchBooks from "../hooks/fetchBooks";
import Button from "./components/UI/Button";

export default function Search() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const result = await fetchBooks(query);
      setBooks(result);
      console.log(result, "책검색 결과>>>");
    } catch (error) {
      console.error("Error searching books:", error);
    }
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return `${text.substring(0, maxLength)}...`;
  };

  const handleCardClick = (isbn) => {
    navigate(`/books/${isbn}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex mb-8 gap-4 w-1/2 mx-auto">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="검색어를 입력하세요"
          className="flex-1 p-2 border border-primary bg-transparent rounded w-full text-white "
        />

        <Button text="검색" onClick={handleSearch} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow flex flex-col items-center text-center h-full"
            onClick={() => handleCardClick(book.isbn)}
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-64 object-contain"
            />
            <div className="mt-2">
              <h3 className="font-bold">{truncateText(book.title, 18)}</h3>
              <p>{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
