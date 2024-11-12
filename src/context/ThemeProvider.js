import { useEffect, useState } from 'react'
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({children}) => {
    
    /*Determines the initial theme by checking localStorage.
    If no preference is saved, it uses the system's color scheme preference.*/

    const getInitialTheme = () => {
        if (typeof window !== 'undefined') { // Check if code is running in the browser
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) return savedTheme;
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark ? 'dark' : 'light';
        }
        return 'light'; // Default theme for server-rendered environments
    }

    // Store the current theme in a state
    const [theme, setTheme] = useState(getInitialTheme);

    //Updates the theme in localStorage whenever a change is toggled
    useEffect(()=>{
        document.documentElement.setAttribute('data-theme',theme);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', theme);
        }
    },[theme])

    //Toggles between light and dark mode themes
    const ToggleTheme = () => {
        setTheme((currentTheme)=>(currentTheme === 'light' ? 'dark' : 'light'))
    }

    /*Now the ThemeContext has the theme and ToggleTheme function
    available for the rest of the components in the app*/
    return(
        <ThemeContext.Provider value={{theme, ToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}