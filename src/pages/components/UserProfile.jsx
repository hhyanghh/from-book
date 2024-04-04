import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";
import { logout } from "../../api/firebase";

const UserProfile = ({ user }) => {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <Menu className="relative" as="div">
      <Menu.Button>
        <div className="flex items-center">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="w-10 h-10 rounded-full"
          />
          <span className="ml-2 text-white">{user.displayName}</span>
        </div>
      </Menu.Button>
      <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none flex flex-col p-4">
        <Menu.Item className="flex justify-center">
          {({ active }) => (
            <Link
              to="/myPage"
              className={`${
                active ? "bg-gray text-secondary" : "text-secondary"
              } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
            >
              마이페이지
            </Link>
          )}
        </Menu.Item>
        <Menu.Item className="flex justify-center">
          <Button
            text="로그아웃"
            className="w-24 m-auto"
            onClick={handleLogout}
          />
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default UserProfile;
