import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import casion from '../../../assets/brands/casio.png'
import amazon from '../../../assets/brands/amazon.png'
import moonstra from '../../../assets/brands/moonstar.png'
import star from '../../../assets/brands/star.png'
import starPeople from '../../../assets/brands/start_people.png'
import randstrat from '../../../assets/brands/randstad.png'
import { Autoplay } from 'swiper/modules';

const brandLogos=[casion,amazon,moonstra,star,starPeople,randstrat
];
const Brands = () => {
    return (
       <div className='mb-10'>
        <div>
            <h1 className='text-4xl font-bold text-secondary text-center mb-5'>We've helped thousands of sales teams</h1>
        </div>
        <Swiper 
       slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true} 
        loop={true}

         modules={[Autoplay]}
          autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
       >
        {
            brandLogos.map((Logo,index)=><SwiperSlide key={index}  ><img src={Logo} alt="" /></SwiperSlide>)
        }
       </Swiper>
       </div>
    );
};

export default Brands;