import React from 'react';
import car from '../../../assets/bookingIcon.png'

const Card = () => {
    return (
        /* Mobile-e padding left/right add kora hoyeche (px-5) jate deyal-e na lege jay */
        <div className='max-w-6xl mx-auto mb-15 px-5 md:px-0'>
           <h1 className='text-3xl md:text-4xl font-bold text-secondary mb-8 text-center md:text-left'>How it Works</h1>
           
           {/* Grid: Mobile-e 1 column, Tablet-e 2 column, Laptop-e 4 column */}
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10'>
            
            {/* Card 1 */}
            <div className='shadow-sm p-8 md:p-10 rounded-3xl bg-gray-300 flex flex-col items-center md:items-start text-center md:text-left'>
                <img src={car} alt="" className="w-16 md:w-auto" />
                <h1 className='font-bold text-secondary mt-4'>Booking Pick & Drop</h1>
                <p className='text-[#606060] mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            {/* Card 2 */}
            <div className='shadow-sm p-8 md:p-10 rounded-3xl bg-gray-300 flex flex-col items-center md:items-start text-center md:text-left'>
                <img src={car} alt="" className="w-16 md:w-auto" />
                <h1 className='font-bold text-secondary mt-4'>Booking Pick & Drop</h1>
                <p className='text-[#606060] mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            {/* Card 3 */}
            <div className='shadow-sm p-8 md:p-10 rounded-3xl bg-gray-300 flex flex-col items-center md:items-start text-center md:text-left'>
                <img src={car} alt="" className="w-16 md:w-auto" />
                <h1 className='font-bold text-secondary mt-4'>Booking Pick & Drop</h1>
                <p className='text-[#606060] mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>

            {/* Card 4 */}
            <div className='shadow-sm p-8 md:p-10 rounded-3xl bg-gray-300 flex flex-col items-center md:items-start text-center md:text-left'>
                <img src={car} alt="" className="w-16 md:w-auto" />
                <h1 className='font-bold text-secondary mt-4'>Booking Pick & Drop</h1>
                <p className='text-[#606060] mt-2'>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
         
           </div>
        </div>
    );
};

export default Card;