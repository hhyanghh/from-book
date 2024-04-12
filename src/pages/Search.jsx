import React, { useEffect } from "react";
import fetchBooks from "../hooks/fetchBooks";

export default function Search() {
  const books = fetchBooks("여우의 계절");

  useEffect(() => {
    console.log("검색 결과:", books);
  }, [books]);

  return <div>books</div>;
}
