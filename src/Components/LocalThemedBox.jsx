import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeProvider";

export const LocalThemedBox = () => {
    // const themeOjb = useContext(ThemeContext)
    const {theme, setTheme} = useContext(ThemeContext)
    const [localTheme, setLocalTheme] = useState('light')
    const toggleTheme = localTheme === "light" ? "dark" : "light"

    const handleToggleTheme = () => {
        setLocalTheme(toggleTheme)
    }

    useEffect(() => {
        setLocalTheme(theme)
    },[theme])
  return (
    <>
      <div  style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${localTheme}`}>
        <p className={`txt-${localTheme}`}>Hii</p>
        <button className={`btn btn-${localTheme}`} onClick={handleToggleTheme} >Toggle local theme to {toggleTheme} </button>
      </div>
    </>
  );
};
