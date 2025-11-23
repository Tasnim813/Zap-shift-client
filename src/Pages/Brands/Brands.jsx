import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import casio from '../../assets/brands/casio.png'
import amazon from '../../assets/brands/amazon.png'
import monstar from '../../assets/brands/moonstar.png'
import star from '../../assets/brands/star.png'
import starpeple from '../../assets/brands/start_people.png'
import randstrat from '../../assets/brands/randstad.png'
import { Autoplay } from 'swiper/modules';


const brandsLogo=[casio,amazon,monstar,star,starpeple,randstrat];
const Brands = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-3xl font-bold text-center mb-10'>We've helped thousands of sales teams</h1>
            <Swiper
        slidesPerView={4}
        // loop={true}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        modules={[Autoplay]}
         autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        >

         
              {
                brandsLogo.map((logo,index)=><SwiperSlide key={index}>
                    <img src={logo} alt="" />
                </SwiperSlide>)
            }
          
            
    
        </Swiper>
        </div>
    );
};

export default Brands;