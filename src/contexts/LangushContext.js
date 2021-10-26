import React, {createContext, useState} from "react";

export const LanguageContext = createContext();

export function LanguageProveder(props) {
  const [language, setLanguage] = useState("spanish");
  const chengeLanguash = (e) => setLanguage(e.target.value);
  return (
    <LanguageContext.Provider value={{language, chengeLanguash}}>
      {props.children}
    </LanguageContext.Provider>
  );
}
