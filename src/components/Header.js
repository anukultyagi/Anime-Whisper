"use client";
import React, { useEffect, useState } from "react";

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <header className="p-4">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-5xl font-headingFont font-bold dark:text-gray-50">
                    Anime Whisper
                </h1>
                <p className="text-lg font-headingFont mt-3 text-gray-600 dark:text-gray-100">
                    Unleash the Wisdom of Anime Quotes
                </p>
                <button className={`absolute right-16 top-10 text-2xl `} onClick={toggleDarkMode}>{darkMode ?
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" text-[#D4D4D4]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
                    :
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className=" text-[#1c1c1c]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"></path></svg>
                }</button>
            </div>
        </header>
    );
};

export default Header;