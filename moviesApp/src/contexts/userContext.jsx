import React, { useState } from "react";

export const UserContext = React.createContext(null);

export const UserProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [user, setUser] = useState("");

  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isAuthenticated,
        setUser,
        setIsAuthenticated,
        setToken,
        authToken
      }}>
      {props.children}
    </UserContext.Provider>
  );
};
