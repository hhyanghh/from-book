import React from "react";

const UserProfile = ({ user }) => {
  console.log(user, "userProfile>>>");
  return (
    <div className="flex items-center">
      <img
        src={user.photoURL}
        alt={user.displayName}
        className="w-10 h-10 rounded-full"
      />
      <span className="ml-2 text-white">{user.displayName}</span>
    </div>
  );
};

export default UserProfile;
