import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

export const AuthContext = React.createContext<firebase.User | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
    });

    return unsubscribe;
  }, []);

  console.log(user);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
