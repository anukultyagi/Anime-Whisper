import React from 'react'
import { GiSadCrab } from "react-icons/gi";

const Loader = () => {
    return (
        <div className=' text-white mix-blend-difference  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <span className='animate-ping text-9xl'>
                <GiSadCrab />
            </span>
        </div>
    )
}

export default Loader