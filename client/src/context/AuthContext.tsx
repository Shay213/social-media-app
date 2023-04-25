import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  coverpic?: string;
  profilepic?: string;
  city?: string;
  website?: string;
}

interface Inputs {
  username: string;
  password: string;
}

interface AuthContextProviderValues {
  currentUser: User | null;
  login?: (inputs: Inputs) => Promise<void>;
}

const AuthContext = createContext<AuthContextProviderValues>({
  currentUser: null,
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

  const login = async (inputs: Inputs) => {
    const res = await axios.post(
      "http://localhost:8800/api/auth/login",
      inputs,
      {
        withCredentials: true,
      }
    );

    setCurrentUser(res.data);
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
