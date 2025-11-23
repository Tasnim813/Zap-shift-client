import React from 'react';
import serviseImg from '../../assets/service.png'
const Service = () => {
    return (
        <div className='bg-secondary mb-10 p-10 rounded-3xl'>
           <h1 className='text-white text-center text-3xl font-bold'>service here</h1> 
           <p className='text-white text-center max-w-3xl mx-auto'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
            <div className='shadow-sm bg-white p-10 rounded-2xl text-center'>
          <div className='flex justify-center'>
              <img className='flex justify-center text-center' src={serviseImg} alt="" />
          </div>
            <h1 className='font-bold text-xl'>Express  & Standard Delivery</h1>
            <p>We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>

           </div>
            <div className='shadow-sm bg-primary p-10 rounded-2xl text-center'>
          <div className='flex justify-center'>
              <img className='flex justify-center text-center' src={serviseImg} alt="" />
          </div>
            <h1 className='font-bold text-xl'>Nationwide Delivery</h1>
            <p>We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>

           </div>
            <div className='shadow-sm bg-white p-10 rounded-2xl text-center'>
          <div className='flex justify-center'>
              <img className='flex justify-center text-center' src={serviseImg} alt="" />
          </div>
            <h1 className='font-bold text-xl'>Fulfillment Solution</h1>
            <p>We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>

           </div>
            <div className='shadow-sm bg-white p-10 rounded-2xl text-center'>
          <div className='flex justify-center'>
              <img className='flex justify-center text-center' src={serviseImg} alt="" />
          </div>
            <h1 className='font-bold text-xl'>Cash on Home Delivery</h1>
            <p>100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>

           </div>
            <div className='shadow-sm bg-white p-10 rounded-2xl text-center'>
          <div className='flex justify-center'>
              <img className='flex justify-center text-center' src={serviseImg} alt="" />
          </div>
            <h1 className='font-bold text-xl'>Corporate Service / Contract In Logistics</h1>
            <p>Customized corporate services which includes warehouse and inventory management support.</p>

           </div>
            <div className='shadow-sm bg-white p-10 rounded-2xl text-center'>
          <div className='flex justify-center'>
              <img className='flex justify-center text-center' src={serviseImg} alt="" />
          </div>
            <h1 className='font-bold text-xl'>Parcel Return</h1>
            <p>Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>

           </div>
           
           </div>
        </div>
    );
};

export default Service;