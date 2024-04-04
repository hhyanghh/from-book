import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import Button from "./UI/Button";

const UserProfile = ({ user }) => {
  return (
    <Menu>
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
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <Link className={`${active && "bg-blue-500"}`} to="/myPage">
              마이페이지
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          <Button text="로그아웃" />
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default UserProfile;
