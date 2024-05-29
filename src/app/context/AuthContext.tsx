"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve user from local storage on initial load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const login = (username: string) => {
    setUser(username);
    localStorage.setItem('user', username); // Store user in local storage
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove user from local storage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  // const context = useContext(AuthContext);
  // if (context === undefined) {
  //   throw new Error('useAuth must be used within an AuthProvider');
  // }
  // return context;
};
