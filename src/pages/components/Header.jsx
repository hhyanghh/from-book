import React from "react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const Header = () => {
  const handleClick = () => {
    console.log("Login >>>");
  };
  return (
    <header>
      <nav>
        <ul>
          <li>Logo</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <Button text="로그인" type="button" onClick={handleClick} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
