import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { FaSquareArrowUpRight } from "react-icons/fa6";


import bannerImg1 from '../../assets/banner/banner1.png'
import bannerImg2 from '../../assets/banner/banner2.png'
import bannerImg3 from '../../assets/banner/banner3.png'

const Banner = () => {
    return (
          <Carousel autoPlay={true} infiniteLoop={true}>
                <div className='relative'>
                    <img className='' src={bannerImg1}/>
                    <div className='absolute top-98 left-10  text-white '>
                       <p className='text-xl text-[#606060] ml-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From <br /> personal  packages to business shipments — we deliver on time, every time.</p>
                        <div className='flex gap-5 ml-10 '>
                            <div className='flex '>
                                <button className='bg-primary btn rounded-full px-10 py-6 text-secondary font-bold text-xl'>Track Your Parcel</button>
                                <FaSquareArrowUpRight size={50} className='text-black rounded-full' />

                               
                            </div>
                            <button className='btn btn-outline px-10 py-6 text-secondary font-bold text-xl bg-white'>Be A Rider</button>
                        </div>
                    </div>
                    
                </div>
                <div className='relative'>
                    <img src={bannerImg2} />
                    <div className='absolute top-95 left-10  text-white '>
                       <p className='text-xl text-[#606060] ml-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From <br /> personal  packages to business shipments — we deliver on time, every time.</p>
                        <div className='flex gap-5 ml-10 '>
                            <div className='flex'>
                                <button className='bg-primary btn rounded-full px-10 py-6 text-secondary font-bold text-xl'>Track Your Parcel</button>
                                <FaSquareArrowUpRight size={50} className='text-black rounded-full' />
                               
                            </div>
                            <button className='btn px-10 py-6 text-secondary font-bold text-xl btn-outline bg-white'>Be A Rider</button>
                        </div>
                    </div>
                    
                </div>
                <div className='relative'>
                    <img src={bannerImg3} />
                    <div className='absolute top-90 left-10  text-white '>
                       <p className='text-xl text-[#606060] ml-10'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From <br /> personal  packages to business shipments — we deliver on time, every time.</p>
                        <div className='flex gap-5 ml-10 '>
                            <div className='flex'>
                                <button className='bg-primary btn rounded-full px-10 py-6 text-secondary font-bold text-xl'>Track Your Parcel</button>
                                <FaSquareArrowUpRight size={50} className='text-black rounded-full' />
                               
                            </div>
                            <button className='btn px-10 py-6 text-secondary font-bold text-xl btn-outline bg-white'>Be A Rider</button>
                        </div>
                    </div>
                    
                </div>
            </Carousel>
    );
};

export default Banner;