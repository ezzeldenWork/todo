import React, {createContext} from "react";
import useToggleState from "../hoks/useToggleState";

export const ThemeContext = createContext();

export function ThemeProveder(props) {
  const [isDarkMode, toggleTheme] = useToggleState(false);

  return (
    <ThemeContext.Provider
      value={{isDarkMode, toggleTheme}}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}