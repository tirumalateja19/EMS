import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const ContextAPI = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("admin") || !localStorage.getItem("employees")) {
      setLocalStorage();
    }
    const { employees, admin } = getLocalStorage();
    setLoggedUser({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={loggedUser}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextAPI;
