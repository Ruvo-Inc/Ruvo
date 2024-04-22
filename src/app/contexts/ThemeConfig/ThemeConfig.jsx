"use client"
import React, { useContext, useState } from 'react';
const ThemeConfigerContext = React.createContext();

export function useThemeConfig() {
  return useContext(ThemeConfigerContext);
}

export const ThemeConfiger =  ({children}) => {

  const [pagetitle, setPagetitle] = useState('Home');
  const [headerStyle, setHeaderStyle] = useState('light');
  const [activePage, setActivePage] = useState('home');
  const [themeMode, setThemeMode] = useState('light');

  
  const getPageTitle = (title) => {
    setPagetitle(title);
  };

  const getActivePage = (title) => {
    setActivePage(title);
  };

  
  const value= {
    pagetitle,
    getPageTitle,
    activePage,
    getActivePage,
    themeMode,
    setThemeMode,
    headerStyle,
    setHeaderStyle
  };

  return (
    <ThemeConfigerContext.Provider value={value}>
      {children}
    </ThemeConfigerContext.Provider>
  );
};
