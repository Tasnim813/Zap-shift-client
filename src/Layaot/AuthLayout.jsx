import React from 'react';
import Logo from '../Component/Logo/Logo';
import { Outlet } from 'react-router';
import logo from '../assets/authImage.png'
const AuthLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Logo></Logo>
            <div className='flex max-w-5xl mx-auto mt-10 items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
               <div className='flex-1'>
                 <img src={logo} alt="" />
               </div>
               
            </div>
        </div>
    );
};

export default AuthLayout;