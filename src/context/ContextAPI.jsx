import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const ContextAPI = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
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
