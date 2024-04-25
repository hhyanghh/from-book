import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/UserContext";
import About from "./pages/About";
import AddQuote from "./pages/AddQuote";
import BookDetail from "./pages/BookDetail";
import Layout from "./pages/components/Layout";

import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/quotes/add", element: <AddQuote /> },
      { path: "myPage", element: <MyPage /> },
      { path: "books", element: <Search /> },
      { path: "about", element: <About /> },
      { path: "/books/:isbn", element: <BookDetail /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </UserProvider>
  );
}
