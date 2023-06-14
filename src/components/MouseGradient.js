import React, { useContext, useEffect } from 'react'
import RefContext from '../contexts/GlobalContext';

export default function MouseGradient() {

const {isDarkMode} = useContext(RefContext)

useEffect(() => {
    const handleMouseMove = (event) => {
      const cursor = document.querySelector('.cursor-gradient');
      const x = event.clientX;
      const y = event.clientY;
      cursor.style.background = `radial-gradient(circle at ${x}px ${y}px, ${ isDarkMode? 'rgba(45,212,192,0.15)': ' rgba(100, 180, 200 ,0.35)'}, rgba(0, 0, 0, 0) ${isDarkMode ? '50%': '70%'} )`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, );

  return (
    <div className='cursor-gradient'>
    </div>
  )
}