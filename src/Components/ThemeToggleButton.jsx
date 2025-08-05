import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

export const ThemeToggleButton = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const ToggleTheme = theme === "light" ? "dark" : "light"

    const handleToggleTheme = () => {
        setTheme(ToggleTheme)
    }

    return(

        <>
            <button className={`btn btn-${theme}`} onClick={handleToggleTheme} style={{cursor: 'pointer'}} >Switch to {ToggleTheme} theme</button>

        </>
    )
}