
import React, { createContext, useRef, useState } from 'react';

const RefContext = createContext(null);

export const UserRefProvider = ({ children }) => {
    const educationRef = useRef(null);
    const workRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);
    const projectRef = useRef(null);
    const aboutRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(false);
  

    return (
        <RefContext.Provider
            value={{
                aboutRef,
                educationRef,
                workRef,
                skillsRef,
                contactRef,
                projectRef,
                isDarkMode,
                setIsDarkMode,
            }}>
            {children}
        </RefContext.Provider>
    );
};

export default RefContext;