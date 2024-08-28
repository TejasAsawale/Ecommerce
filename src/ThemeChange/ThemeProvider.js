import React, { createContext, useState } from 'react'

export const themeContext = createContext();


const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('light')

    function toggle () {
        setTheme((prevTheme)=> prevTheme === 'light' ? 'dark' : 'light')
    }
    return (
        <themeContext.Provider value={{theme, toggle}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider