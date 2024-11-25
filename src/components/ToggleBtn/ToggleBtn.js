import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import styles from '../../styles/styles.module.css';

export const ToggleBtn = () => {

    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className={styles.toggleSwitch}>
            <label className={styles.switchLabel}>
                {/*Checkbox for the toggle functionality */}
                <input
                type="checkbox"
                className={styles.checkbox}
                onChange={toggleTheme}
                checked={theme === 'dark'}
                />
                {/* Slider applies the styling for the toggle button */}
                <span className={styles.slider}></span>
            </label>
        </div>
     
        
    )
}

