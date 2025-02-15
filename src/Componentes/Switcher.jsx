import React, { useContext } from "react";
import {ThemeContext} from '../Providers/ThemeContext';


export default function Switcher () {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <button class="form-control btn btn-primary" onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
            Tema: {theme === 'Light' ? 'Dark' : 'Light'}
        </button>
    );
}