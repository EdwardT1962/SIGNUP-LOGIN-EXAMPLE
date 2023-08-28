import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [clientData, setClientData] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('jwtToken'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('jwtToken', token);
    } else {
      localStorage.removeItem('jwtToken');
    }
  }, [token]);

  return (
    <UserContext.Provider value={{ clientData, setClientData, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
