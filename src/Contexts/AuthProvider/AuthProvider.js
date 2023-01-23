import React, { createContext, useState, useEffect } from "react";
import auth from "./../../Firebase/firebase.init";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const providerLogin = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const userLogOut = () => {
    return signOut(auth);
  };

  const authInfo = { providerLogin, user, userLogOut, setUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
        userLogOut()
          .then(() => {})
          .catch((error) => {});
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}> {children}</AuthContext.Provider>
  );
};

export default AuthProvider;
