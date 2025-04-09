import React, { createContext, useState,useEffect} from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const ContextAPI = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {
    const { employee, adminData } = getLocalStorage();
    setLoggedUser({ employee, adminData });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={loggedUser}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextAPI;
