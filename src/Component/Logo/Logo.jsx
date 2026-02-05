import React from 'react';
import logo  from '../../assets/logo.png'
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link className='flex  items-center gap-0'>
            <img src={logo} alt="" />
            <h1 className='text-3xl font-bold ml-[-10px] pt-[10px]'>Zapshift</h1>
        </Link>
    );
};

export default Logo;