"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import firebase_app from '@/firebase/config';

interface AuthContextProps {
  user: User | null;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthContextProvider');
  }
  return context;
};

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth(firebase_app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
