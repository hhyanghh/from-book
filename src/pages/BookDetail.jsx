import React from "react";
import { useLocation } from "react-router-dom";

const BookDetail = () => {
  const location = useLocation();
  const { book } = location.state;

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <img
            src={book.image}
            alt={book.title}
            className="max-w-full h-auto"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
          <p className="text-lg mb-2">{book.author}</p>
          <p className="text-lg mb-2">{book.isbn}</p>
          <p className="text-lg mb-2">{book.description}</p>
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            사러 가기
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
