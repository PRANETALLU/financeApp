// UserContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Create a context
const UserContext = createContext();

// Custom hook to use the UserContext
export const useUserAuth = () => useContext(UserContext);

// Provider Component
export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function for SignUp
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function for SignIn
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to SignOut
  const logOut = () => {
    return signOut(auth);
  };

  // Listen for user state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ user, signUp, signIn, logOut }}>
      {!loading && children}
    </UserContext.Provider>
  );
};
