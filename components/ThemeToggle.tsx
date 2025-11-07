"use client"
import { Moon, Sun } from 'lucide-react';
import React from 'react'
function ThemeToggle() {
    const[isDarkMode, setIsDarkMode] = React.useState(true);
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if(savedTheme === 'dark'){
            setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        }
        else if(savedTheme === 'light'){

            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
        else{
            setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        }
    }, []);
    const toggleTheme = () => {
        if(isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };
  return (
    <button onClick={toggleTheme} className="fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden">
        {isDarkMode ? <Sun className='h-6 w-6 text-yellow-300'/> : <Moon className='h-6 w-6 text-blue-900'/>}
    </button>
  )
}

export default ThemeToggle