// making context

import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;

// custom hooks

export default function useTHeme() {
  return useContext(ThemeContext);
}
