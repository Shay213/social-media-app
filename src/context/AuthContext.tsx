import React, { createContext, useContext, useEffect, useState } from "react";
import userProfile from "../assets/images/userProfile.jpg";

interface User {
  id: number;
  name: string;
  imgUrl: string;
}

interface AuthContextProviderValues {
  currentUser: User | null;
  login: () => void;
}

const AuthContext = createContext<AuthContextProviderValues>({
  currentUser: null,
  login: () => {
    /* Empty function intentionally added here */
  },
});

export function useAuthContext() {
  return useContext(AuthContext);
}

export default function AuthContextProvider({
  children,
}: React.PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState(() => {
    if (localStorage.getItem("user") === null) return null;
    return JSON.parse(localStorage.getItem("user") as string) as User;
  });

  const login = () => {
    setCurrentUser({ id: 1, name: "John Doe", imgUrl: userProfile });
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}
