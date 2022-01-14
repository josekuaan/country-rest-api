import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { useTypedSelector } from '../redux/hooks/useTypedSelector';

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useTypedSelector((state) => state.themeReducer.darkThemeEnabled);
  console.log(darkThemeEnabled)
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? "dark" : "light" }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;