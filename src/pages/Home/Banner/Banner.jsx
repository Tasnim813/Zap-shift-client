import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';
import { Link } from 'react-router';
import { FaCircleArrowUp } from "react-icons/fa6";

const Banner = () => {
    return (
         <Carousel 
          autoPlay={true}
          infiniteLoop={true}
         
          >
                <div>
                    <img src={banner1} />
                    <div className='text-left ml-20 relative top-[-140px] hidden md:block'>
                        <p className=' hidden md:block'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal  <br />packages to business shipments — we deliver on time, every time.</p>
                        <div className='flex '>
                            <div className='flex items-center '>
                                <Link className="btn rounded-4xl bg-primary  font-bold ">Track Your Parcel</Link>
                                <FaCircleArrowUp size={25} className='ml-2 rotate-45  text-secondary font-bold' />
                            </div>
                           <div>
                             <Link className='btn ml-10 '>Be A Rider</Link>
                           </div>
                        </div>
                    </div>
                  
                </div>
                <div>
                    <img src={banner2}/>
                    <div className='text-left ml-20 relative top-[-140px] hidden md:block'>
                        <p className=' hidden md:block'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal  <br />packages to business shipments — we deliver on time, every time.</p>
                        <div className='flex '>
                            <div className='flex items-center '>
                                <Link className="btn rounded-4xl bg-primary  font-bold ">Track Your Parcel</Link>
                                <FaCircleArrowUp size={25} className='ml-2 rotate-45  text-secondary font-bold' />
                            </div>
                           <div>
                             <Link className='btn ml-10 '>Be A Rider</Link>
                           </div>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <img src={banner3} />
                    <div className='text-left ml-20 relative top-[-140px] hidden md:block'>
                        <p className=' hidden md:block'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal  <br />packages to business shipments — we deliver on time, every time.</p>
                        <div className='flex '>
                            <div className='flex items-center '>
                                <Link className="btn rounded-4xl bg-primary  font-bold ">Track Your Parcel</Link>
                                <FaCircleArrowUp size={25} className='ml-2 rotate-45  text-secondary font-bold' />
                            </div>
                           <div>
                             <Link className='btn ml-10 '>Be A Rider</Link>
                           </div>
                        </div>
                    </div>
                    
                </div>
            </Carousel>
    );
};

export default Banner;