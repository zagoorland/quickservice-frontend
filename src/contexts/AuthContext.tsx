import React, { useContext, useState, useEffect } from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";

interface IUser {
  currentUser: firebase.User | null;
  loading: boolean;
}

export const AuthContext = React.createContext<IUser>({
  currentUser: null,
  loading: true,
});

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({ currentUser: null, loading: true });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser({ loading: false, currentUser: firebaseUser });
      } else {
        setUser({ loading: false, currentUser: null });
      }
    });

    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
