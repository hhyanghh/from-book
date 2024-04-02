import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import AddQuote from "./pages/AddQuote";
import BookDetail from "./pages/BookDetail";

import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

// 라우터 생성
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "quotes/add", element: <AddQuote /> },
  { path: "myPage", element: <MyPage /> },
  { path: "books", element: <Search /> },
  { path: "about", element: <About /> },
  { path: "books/:id", element: <BookDetail /> },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
