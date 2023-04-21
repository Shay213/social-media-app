import React, { createContext, useContext, useEffect, useState } from "react";

interface DarkModeContextProviderValues {
  darkMode: boolean;
  toggle: () => void;
}

const DarkModeContext = createContext<DarkModeContextProviderValues>({
  darkMode: false,
  toggle: () => {
    /* Empty function intentionally added here */
  },
});

export function useDarkModeContext() {
  return useContext(DarkModeContext);
}

export default function DarkModeContextProvider({
  children,
}: React.PropsWithChildren) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggle = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggle }}>
      {children}
    </DarkModeContext.Provider>
  );
}
