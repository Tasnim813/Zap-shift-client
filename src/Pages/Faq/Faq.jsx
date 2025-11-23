import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowCircleUp } from "react-icons/fa";


const Faq = () => {
    return (
        <div className='max-w-5xl mx-auto mt-20'>
            <h1 className='text-3xl font-bold  text-secondary text-center'>Frequently Asked Question (FAQ)</h1>
            <p className='text-center mt-5'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            <div className='border p-10 rounded-2xl mt-10'>
                <h1 className='text-xl font-bold mb-2'>How does this posture corrector work?</h1>
                <p>A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</p>


            </div>
            <div className='bg-gray-200 p-5 rounded-xl mt-10 font-bold flex justify-between'>
                <p>Is it suitable for all ages and body types?</p>
                <IoIosArrowDown />

            </div>
            <div className='bg-gray-200 p-5 rounded-xl mt-5 font-bold flex justify-between'>
                <p>Is it suitable for all ages and body types?</p>
                <IoIosArrowDown />

            </div>
            <div className='bg-gray-200 p-5 rounded-xl mt-5 font-bold flex justify-between'>
                <p>Is it suitable for all ages and body types?</p>
                <IoIosArrowDown />

            </div>
            <div className='bg-gray-200 p-5 rounded-xl mt-5 font-bold flex justify-between'>
                <p>Is it suitable for all ages and body types?</p>
                <IoIosArrowDown />

            </div>
          <div className='flex justify-center gap-2 mt-5 mb-10'>
              <button className='btn bg-primary text-center font-bold'>See More FAQ’s</button>
              <FaArrowCircleUp size={30} />
          </div>
          

        </div>
    );
};

export default Faq;