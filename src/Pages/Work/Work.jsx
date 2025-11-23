import React from 'react';
import workIcon from '../../assets/bookingIcon.png'
const Work = () => {
    return (
        <div className='max-w-5xl mx-auto mb-10'>
            <h1 className=' font-bold text-3xl'>How it Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                <div className='shadow-sm p-10 rounded-xl bg-gray-200 '>
        <img src={workIcon} alt="" />
        <h1 className='font-bold'>Booking Pick & Drop</h1>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
                <div className='shadow-sm p-10 rounded-xl bg-gray-200 '>
        <img src={workIcon} alt="" />
        <h1 className='font-bold'>Cash On Delivery</h1>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
                <div className='shadow-sm p-10 rounded-xl bg-gray-200 '>
        <img src={workIcon} alt="" />
        <h1 className='font-bold'>Delivery Hub</h1>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
                <div className='shadow-sm p-10 rounded-xl bg-gray-200 '>
        <img src={workIcon} alt="" />
        <h1 className='font-bold'>Booking SME & Corporate</h1>
        <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
              
            </div>
        </div>
    );
};

export default Work;