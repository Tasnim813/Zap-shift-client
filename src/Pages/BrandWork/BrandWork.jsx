import React from 'react';
import tracking from '../../assets/live-tracking.png'
import self from '../../assets/safe-delivery.png'
const BrandWork = () => {
    return (
        <div>
            <div className='flex items-center gap-5 shadow-sm bg-gray-100 p-10 mb-10'>
                <img src={tracking} alt="" />
               
               
                <div>
                    <h1 className='font-bold'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex items-center gap-5 shadow-sm bg-gray-100 p-10 mb-10'>
                <img src={self} alt="" />
                <div>
                    <h1 className='font-bold'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex items-center gap-5 shadow-sm bg-gray-100 p-10 mb-10'>
                <img src={self} alt="" />
                <div>
                    <h1 className='font-bold'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
        </div>
    );
};

export default BrandWork;