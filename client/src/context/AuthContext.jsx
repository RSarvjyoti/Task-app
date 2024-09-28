import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';  // Assuming you have an api setup for axios calls

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Set loading to false after checking localStorage
  }, []);

  const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password });
    const userData = response.data;
    setUser(userData);

    localStorage.setItem('token', userData.token); // Store token in localStorage
    localStorage.setItem('user', JSON.stringify(userData)); // Store user in localStorage
  };

  const signup = async (username, email, password) => {
    const response = await api.post('/auth/register', { username, email, password });
    return response.data;  // Returns the registered user data
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
