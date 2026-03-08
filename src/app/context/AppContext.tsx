import React, { createContext, useContext, useState, ReactNode } from 'react';
import { UserProgress } from '../types';

interface AppContextType {
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
  userProgress: UserProgress;
  addStamp: (locationId: string) => void;
  resetStamps: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProgress, setUserProgress] = useState<UserProgress>({ stamps: [] });

  const login = (email: string, password: string) => {
    // Mock login - in production this would call an API
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserProgress({ stamps: [] });
  };

  const addStamp = (locationId: string) => {
    setUserProgress(prev => ({
      stamps: [...new Set([...prev.stamps, locationId])]
    }));
  };

  const resetStamps = () => {
    setUserProgress({ stamps: [] });
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, login, logout, userProgress, addStamp, resetStamps }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}