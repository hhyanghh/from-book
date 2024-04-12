import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import UserProfile from "./UserProfile";

import { useUser } from "../../context/UserContext";

const Header = () => {
  const { user, handleLogin } = useUser();

  return (
    <div className="fixed left-0 right-0 border-b border-primary bg-secondary">
      <header className="h-16 max-w-screen-xl mx-auto content-center px-4">
        <nav className="flex justify-between font-semibold text-primary items-center">
          <Link to="/">
            <img src="./logo.png" className="w-24" alt="logo" />
          </Link>
          <div className="flex gap-4">
            <Link to="/about">About</Link>
            <Link to="/books">Books</Link>
          </div>
          {user ? (
            <UserProfile user={user} />
          ) : (
            <Button text="로그인" type="button" onClick={handleLogin} />
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
