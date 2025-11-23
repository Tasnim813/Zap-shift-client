import React from 'react';
import icon from '../../assets/location-merchant.png'
import top from '../../assets/be-a-merchant-bg.png'
const Custome = () => {
    return (
        
        <div className='bg-[#03373D] rounded-2xl p-10'>
            <div className='relative -top-10 left-10'>
                <img src={top} alt="" />
            </div>
            <div className=' flex justify-between  '>
           <div>
            <h1 className='text-3xl font-bold text-white'>Merchant and Customer Satisfaction <br /> is Our First Priority</h1>
            <p className='text-white  mt-5'>We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.</p>
            <div className='flex gap-10 mt-10'>
                <button className='bg-primary px-5 py-2 rounded-full text-black font-bold'>Become a Merchant</button>
                <button className='btn btn-outline text-primary rounded-full'>Earn with ZapShift Courier</button>

            </div>

           </div>
           <div>
            <img src={icon} alt="" />

           </div>
        </div>
        </div>
    );
};

export default Custome;