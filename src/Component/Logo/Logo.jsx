import React from 'react';
import logo  from '../../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex  items-center gap-0'>
            <img src={logo} alt="" />
            <h1 className='text-3xl font-bold ml-[-10px] pt-[10px]'>Zapshift</h1>
        </div>
    );
};

export default Logo;