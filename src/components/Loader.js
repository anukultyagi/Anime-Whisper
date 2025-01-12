import Image from 'next/image';
import React from 'react';
import gif from '../../public/loader-gif.gif'
const Loader = ({ status }) => {
    return (
        <div className={`${status ? 'block' : 'hidden'} absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}>
            <Image priority src={gif} alt='loading image' />
        </div>
    );
};

export default Loader;
