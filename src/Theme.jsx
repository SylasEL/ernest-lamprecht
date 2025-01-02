/**
 * @copyright 2024 Ernest Lamprecht
 * @license Apache-2.0
 */
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const Theme = ({ children }) => {
  const [isSpecialMode, setIsSpecialMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isSpecialMode, setIsSpecialMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);