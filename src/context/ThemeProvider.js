import { useEffect, useState } from 'react'
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({children}) => {

    // Initially set theme to null to avoid mismatch during SSR
    const [theme, setTheme] = useState(null);

    useEffect(()=>{
        // Only access localStorage and set theme after the component mounts
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
    },[])

    //Storing the actual theme in localStorage
    useEffect(()=>{
        if(theme){
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
        }
    },[theme])

    const toggleTheme = () => {
        setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    }

    // Avoid rendering children if theme isn't set
    if (!theme) return null;

    
    /*Now the ThemeContext has the theme and ToggleTheme function
    available for the rest of the components in the app*/
    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )


}