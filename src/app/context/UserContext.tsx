// src/context/UserContext.tsx
'use client'

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { parseCookies } from 'nookies';

// Define the shape of the context data
interface User {
  username: string,
  jobTitle: string
}
interface UserContextProps {
  user: User;
  setUSer: React.Dispatch<React.SetStateAction<User>>;
}

// Create a context with a default value (could also be null, if preferred)
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUSer] = useState<User>({username:'', jobTitle:''});


  useEffect(() => {
    const cookies = parseCookies();
    setUSer({
      username: cookies?.username || '',
      jobTitle: cookies.jobTitle || ''});
  }, []);

  return (
    <UserContext.Provider value={{ user, setUSer }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};