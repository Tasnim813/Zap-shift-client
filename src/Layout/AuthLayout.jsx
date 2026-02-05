import React from 'react';
import Logo from '../Component/Logo/Logo';
import { Outlet } from 'react-router';
import { FaRProject } from 'react-icons/fa6';
import img from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='flex  items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1'>
                    <img src={img}  alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;