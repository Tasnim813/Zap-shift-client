import React from 'react';
import box from '../../../assets/location-merchant.png'

const Stisfiction = () => {
    return (
        /* Mobile-e padding p-6, Laptop-e md:p-20. Grid mobile-e 1 column, md-te 2 column */
        <div className='bg-secondary p-8 md:p-20 rounded-3xl md:rounded-4xl grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-10 md:mt-20 gap-10 md:gap-0' >
            
            {/* Text Section: Mobile-e center, Laptop-e left */}
            <div className='text-center md:text-left order-2 md:order-1'>
                <h1 className='text-3xl md:text-4xl font-bold text-white'>
                    Merchant and Customer Satisfaction is Our First Priority
                </h1>
                <p className='mt-5 mb-8 text-[#DADADA] text-sm md:text-base'>
                    We offer the lowest delivery charge with the highest value along with 100% safety of your product. 
                    Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                </p>
                
                {/* Buttons: Mobile-e niche niche (flex-col), Laptop-e pashapashi (md:flex-row) */}
                <div className='flex flex-col md:flex-row gap-4 md:gap-10'>
                    <button className='btn bg-primary text-secondary border-none rounded-3xl px-6'>Become a Merchant</button>
                    <button className='btn btn-outline rounded-3xl text-primary border-primary px-6'>Earn with ZapShift Courier</button> 
                </div>
            </div>

            {/* Image Section: Mobile-e upore thakar jonno order-1 use kora jete pare (optional) */}
            <div className='order-1 md:order-2 flex justify-center'>
                <img src={box} alt="Satisfaction" className='w-full max-w-[300px] md:max-w-full h-auto' />
            </div>
            
        </div>
    );
};

export default Stisfiction;