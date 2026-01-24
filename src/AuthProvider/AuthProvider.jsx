import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
     setLoading(true);
     return createUserWithEmailAndPassword(auth, email, password);
     
  }

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log("current user: ", currentUser);
        setLoading(false);
    })
    return () => {
        return unSubscribe;
    }
  }, [])

  const updateUserProfile = (profileInfo) => {
       return updateProfile(auth.currentUser, profileInfo);
  }

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    createUser,
    logIn,
    updateUserProfile,
    googleSignIn,
    logOut, 
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
