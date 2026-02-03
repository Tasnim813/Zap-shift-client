import React from 'react';
import car from '../../../assets/bookingIcon.png'
const Card = () => {
    return (
        <div className='max-w-6xl mx-auto mb-15'>
           <h1 className='text-4xl font-bold text-secondary mb-5'>How it Works</h1>
           <div className='grid grid-cols-4 gap-10'>
            <div className='shadow-sm p-10 rounded-3xl bg-gray-300'>
                <img src={car} alt="" />
                <h1 className='font-bold text-secondary'>Booking Pick & Drop</h1>
                <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='shadow-sm p-10 rounded-3xl bg-gray-300'>
                <img src={car} alt="" />
                <h1 className='font-bold text-secondary'>Booking Pick & Drop</h1>
                <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='shadow-sm p-10 rounded-3xl bg-gray-300'>
                <img src={car} alt="" />
                <h1 className='font-bold text-secondary'>Booking Pick & Drop</h1>
                <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className='shadow-sm p-10 rounded-3xl bg-gray-300'>
                <img src={car} alt="" />
                <h1 className='font-bold text-secondary'>Booking Pick & Drop</h1>
                <p className='text-[#606060]'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
         
           
           </div>
        </div>
    );
};

export default Card;