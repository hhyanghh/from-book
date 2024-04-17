import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { isbn } = useParams();
  console.log(isbn, "isbn >>>");

  return (
    <div>
      <h1>Book Details - ISBN: {isbn}</h1>
    </div>
  );
};

export default BookDetail;
