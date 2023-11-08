import React, { createContext, useContext, useState } from "react";

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [isFontIncreased, setIsFontIncreased] = useState(false);

  const toggleFontSize = () => {
    setIsFontIncreased(prevState => !prevState);
  };

  return (
    <FontSizeContext.Provider value={{ isFontIncreased, toggleFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => {
  return useContext(FontSizeContext);
};
