import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/shared/Footer/Footer';
import Navbar from '../pages/shared/Navbar/Navbar';

const RootLoayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLoayout;