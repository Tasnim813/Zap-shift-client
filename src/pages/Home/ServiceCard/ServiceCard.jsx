import React from 'react';
import apple from '../../../assets/service.png'

const ServiceCard = () => {
    return (
        /* Mobile-e padding komiye p-6 kora hoyeche, md: size (Laptop) e apnar p-20 thakbe */
        <div className='bg-secondary p-6 md:p-20 rounded-3xl md:rounded-4xl mb-10 md:mb-20'>
            <h1 className='text-white font-bold text-3xl md:text-4xl text-center'>Our Services</h1>
            
            <p className='text-white text-center text-sm mt-5 mb-5 max-w-2xl mx-auto'>
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to 
                <br className='hidden md:block' /> business shipments — we deliver on time, every time.
            </p>

            {/* Grid: default 1 column (mobile), md size e 3 column (laptop) */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                
                {/* Card 1 */}
                <div className='text-center shadow-sm p-8 md:p-10 rounded-4xl bg-white'>
                    <img className='mx-auto' src={apple} alt="" />
                    <h1 className='font-bold text-secondary mt-5 mb-5'>Express & Standard Delivery</h1>
                    <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

                {/* Card 2 */}
                <div className='text-center shadow-sm p-8 md:p-10 rounded-4xl bg-white'>
                    <img className='mx-auto' src={apple} alt="" />
                    <h1 className='font-bold text-secondary mt-5 mb-5'>Express & Standard Delivery</h1>
                    <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

                {/* Card 3 */}
                <div className='text-center shadow-sm p-8 md:p-10 rounded-4xl bg-white'>
                    <img className='mx-auto' src={apple} alt="" />
                    <h1 className='font-bold text-secondary mt-5 mb-5'>Express & Standard Delivery</h1>
                    <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

                {/* Card 4 */}
                <div className='text-center shadow-sm p-8 md:p-10 rounded-4xl bg-white'>
                    <img className='mx-auto' src={apple} alt="" />
                    <h1 className='font-bold text-secondary mt-5 mb-5'>Express & Standard Delivery</h1>
                    <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

                {/* Card 5 */}
                <div className='text-center shadow-sm p-8 md:p-10 rounded-4xl bg-white'>
                    <img className='mx-auto' src={apple} alt="" />
                    <h1 className='font-bold text-secondary mt-5 mb-5'>Express & Standard Delivery</h1>
                    <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>

                {/* Card 6 */}
                <div className='text-center shadow-sm p-8 md:p-10 rounded-4xl bg-white'>
                    <img className='mx-auto' src={apple} alt="" />
                    <h1 className='font-bold text-secondary mt-5 mb-5'>Express & Standard Delivery</h1>
                    <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                </div>
               
            </div>
        </div>
    );
};

export default ServiceCard;