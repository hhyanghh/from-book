import React, { createContext, useState, useEffect, useContext } from "react";
import { onUserStateChange, login } from "../api/firebase";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onUserStateChange(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      const userData = await login();
      setUser(userData);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
