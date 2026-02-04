import React from 'react';
import { FaCircleArrowUp } from 'react-icons/fa6';

const Faq = () => {
    return (
        /* Mobile-e m-6 (24px) ebong Laptop-e md:m-20 (80px) */
        <div className='mt-10 md:mt-20 m-6 md:m-20'>
            <h1 className='text-center text-3xl md:text-4xl font-bold text-secondary'>Frequently Asked Question (FAQ)</h1>
            <p className='text-center text-[#606060] text-sm md:text-base mt-5 mb-10 max-w-3xl mx-auto'>
                Enhance posture, mobility, and well-being effortlessly with Posture Pro. 
                Achieve proper alignment, reduce <br className='hidden md:block' /> pain, and strengthen your body with ease!
            </p>

            {/* Accordion Items */}
            <div tabIndex={0} className="collapse collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold text-secondary">How does this posture corrector work?</div>
                <div className="collapse-content text-sm text-[#606060]">
                    A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.
                </div>
            </div>

            <div tabIndex={0} className="collapse mt-5 collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold text-secondary">Is it suitable for all ages and body types?</div>
                <div className="collapse-content text-sm text-[#606060]">
                    Yes! Our product features fully adjustable straps, making it suitable for teenagers, adults, and seniors. Whether you have a slim or broad build, the flexible design ensures a comfortable and secure fit for everyone.
                </div>
            </div>

            <div tabIndex={0} className="collapse mt-5 collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold text-secondary">Does it really help with back pain and posture improvement?</div>
                <div className="collapse-content text-sm text-[#606060]">
                    Yes, it does! By pulling your shoulders back and aligning your spine, it reduces the strain on your neck and back muscles. Regular use helps build muscle memory, which leads to a naturally straighter posture and significant relief from chronic back pain over time.
                </div>
            </div>

            <div tabIndex={0} className="collapse mt-5 collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold text-secondary">Does it have smart features like vibration alerts?</div>
                <div className="collapse-content text-sm text-[#606060]">
                    Yes! Our smart version includes an intelligent sensor that detects when your back is bent more than 25 degrees. It instantly sends a gentle vibration alert to remind you to straighten up.
                </div>
            </div>

            <div tabIndex={0} className="collapse mt-5 collapse-arrow bg-base-100 border-base-300 border">
                <div className="collapse-title font-semibold text-secondary">How will I be notified when the product is back in stock?</div>
                <div className="collapse-content text-sm text-[#606060]">
                    You can sign up for our "Back in Stock" alert on the product page by providing your email address. As soon as the item is restocked, we will send you an automated email!
                </div>
            </div>

            {/* See More Button Section */}
            <div className='text-center flex justify-center items-center gap-2 mt-10'>
                <button className='btn btn-primary font-bold text-secondary px-6'>See More FAQ’s</button>
                <FaCircleArrowUp size={30} className='rotate-45 text-secondary' />
            </div>
        </div>
    );
};

export default Faq;