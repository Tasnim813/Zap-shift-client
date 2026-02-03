import React from 'react';
import one from '../../../assets/live-tracking.png'
import two from '../../../assets/safe-delivery.png'
import three from '../../../assets/tiny-deliveryman.png'

const ParcelCard = () => {
    return (
        <div>
            <div className=" p-4 mt-20">
            <div className="bg-[#FDE7E9] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                
                {/* Left Side: Image/Illustration */}
                <div className="w-full md:w-1/3 flex justify-center border-r-0 md:border-r-2 border-dashed border-gray-400 pr-0 md:pr-8">
                    <img 
                        src={one} 
                        alt="Tracking Illustration" 
                        className="w-48 h-50 md:w-full object-contain"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00302E] mb-4">
                        Live Parcel Tracking
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                        Stay updated in real-time with our live parcel tracking feature. 
                        From pick-up to delivery, monitor your shipment's journey and 
                        get instant status updates for complete peace of mind.
                    </p>
                    
                    
                   
                </div>

            </div>
        </div>
            <div className=" p-4">
            <div className="bg-[#FDE7E9] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                
                {/* Left Side: Image/Illustration */}
                <div className="w-full md:w-1/3 flex justify-center border-r-0 md:border-r-2 border-dashed border-gray-400 pr-0 md:pr-8">
                    <img 
                        src={two} 
                        alt="Tracking Illustration" 
                        className="w-48 h-50 md:w-full object-contain"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00302E] mb-4">
                       
                       100% Safe Delivery
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                       We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
                    </p>
                    
                    
                   
                </div>

            </div>
        </div>
            <div className=" p-4">
            <div className="bg-[#FDE7E9] rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                
                {/* Left Side: Image/Illustration */}
                <div className="w-full md:w-1/3 flex justify-center border-r-0 md:border-r-2 border-dashed border-gray-400 pr-0 md:pr-8">
                    <img 
                        src={three} 
                        alt="Tracking Illustration" 
                        className="w-48 h-50 md:w-full object-contain"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-2/3 text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#00302E] mb-4">
                       24/7 Call Center Support
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                       Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
                    </p>
                 
                   
                </div>

            </div>
        </div>
        </div>
    );
};

export default ParcelCard;