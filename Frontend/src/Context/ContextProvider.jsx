/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";

const authContext = createContext();

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const login = (userData) => {
    setUser(userData);
  };
  return (
    <authContext.Provider value={{ user, login }}>
      {children}
    </authContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(authContext);
export default ContextProvider;
