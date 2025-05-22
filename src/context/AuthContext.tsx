import React, { createContext, useState, useContext, ReactNode } from 'react';
import { currentUser } from '../data/user';

interface AuthContextType {
  isAuthenticated: boolean;
  user: typeof currentUser | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<typeof currentUser | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In a real app, you would validate credentials with a server
    if (email && password) {
      setIsAuthenticated(true);
      setUser(currentUser);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // In a real app, this would create a new user on the server
    setIsAuthenticated(true);
    setUser({
      ...currentUser,
      name,
      email,
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};