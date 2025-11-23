import React from 'react';
import { FaQuoteRight } from "react-icons/fa6";


const ReveiwsCart = ({ reveiw }) => {
    const { review: test, userName ,user_photoURL} = reveiw
    return (
        <div className='p-5 '>
            <FaQuoteRight className='text-primary' />
            <p>{test}</p>
            <div className='border-t border-dashed border-gray-400 my-4 '>

                <div className='flex gap-5'>
                    <div className='h-10 w-10 rounded-full'>
                        <img className='rounded-full' src={user_photoURL} alt="" />
                    </div>
                    <div>
                        <p className='font-bold text-xl'>{userName}</p>
                        <p>Senior Product Designer</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ReveiwsCart;
