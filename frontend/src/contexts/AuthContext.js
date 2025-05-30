import React, { createContext, useState, useEffect } from 'react';
import { loginUser, logoutUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email, password) => {
    const response = await loginUser(email, password);
    if (response.success) {
      setUser(response.user);
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    return response;
  };

  const logout = async () => {
    await logoutUser();
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
