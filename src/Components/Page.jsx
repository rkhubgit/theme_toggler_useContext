import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext, ThemeProvider } from "./ThemeProvider";

export const Page = () => {
    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <>
      <div className={`container bg-${theme}`} id="themed-page">
        <p id="themed-text-container" className={`txt-${theme}`}>lorem ipsum dolor iterit n stuff</p>
        <button className={`btn btn-${theme}`} id="themed-button">
          sup
        </button>
        <LocalThemedBox />
      </div>
    </>
  );
};
