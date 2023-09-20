import React, { useContext, useEffect } from 'react'
import RefContext from '../contexts/GlobalContext';
import { GiBatMask} from 'react-icons/gi'
import { HiSun } from 'react-icons/hi2';
export default function DarkModeButton() {

    const { isDarkMode, setIsDarkMode } = useContext(RefContext)
    useEffect(() => {
        const currentMode = localStorage.getItem('darkMode');
        setIsDarkMode(currentMode === 'true');
    },);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    return (

        <button onClick={toggleDarkMode}
            className=" group transition-all duration-300 hover:sm:text-4xl
            fixed p-2 items-center flex-col flex text-3xl
            right-4 top-4
            sm:left-4 sm:bottom-4 sm:right-auto sm:top-auto 
             hover:text-teal-500     "
        >
            {isDarkMode ? < HiSun /> : < GiBatMask />}
        </button>

    )
}
