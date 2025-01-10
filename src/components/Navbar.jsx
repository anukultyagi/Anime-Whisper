import React from 'react'
import { MdModeNight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";


const Navbar = ({ isDarkMode, setIsDarkMode }) => {
    return (
        <nav className='p-4 bg-white dark:text-white dark:bg-stone-900'>
            <div className='max-w-4xl mx-auto flex justify-between items-center'>

                <p className='text-3xl font-bold'>Anime Whisper</p>

                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className='text-4xl flex text-orange-600'>{isDarkMode ? <MdLightMode /> : <MdModeNight />}</button>
            </div>
        </nav>
    )
}

export default Navbar