import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

export const ToggleBtn = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
       <button onClick={toggleTheme} style={buttonStyle}>
            {theme === 'light' ? 'Dark Mode': 'Light Mode'}
        </button>
    )
}

const buttonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'var(--text-color)',
    color: 'var(--background-color)',
    transition: 'background-color 0.3s, color 0.3s',
  };