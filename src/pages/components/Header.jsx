import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { login } from "../../api/firebase";

const Header = () => {
  const handleLogin = async () => {
    try {
      const user = await login();
      console.log(user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className="border-b border-primary bg-secondary">
      <header className="p-4 max-w-screen-xl mx-auto">
        <nav className="flex justify-between font-semibold text-primary items-center">
          <Link to="/">
            <img src="./logo.png" className="w-24" alt="logo" />
          </Link>
          <div className="flex gap-4">
            <Link to="/about">About</Link>
            <Link to="/books">Books</Link>
          </div>
          <Button text="로그인" type="button" onClick={handleLogin} />
        </nav>
      </header>
    </div>
  );
};

export default Header;
