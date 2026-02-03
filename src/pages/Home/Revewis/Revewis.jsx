import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevewCart from './RevewCart';

const Revewis = ({reveiwsPromise}) => {
    const reveiws=use(reveiwsPromise)
    console.log(reveiws)
    return (
      <div>
        <div className=' text-center'>
        <h1 className='text-4xl font-bold text-secondary'>What our customers are sayings</h1>
<p className='text-[#606060] text-xl mt-5 mb-10'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>   
   </div>
       <Swiper
       loop={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        
          autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >

        {
            reveiws.map(reveiw=><SwiperSlide key={reveiw.id}>
          <RevewCart reveiw={reveiw}></RevewCart>
        </SwiperSlide>)
        }
        
        
      </Swiper>
      </div>
    );
};

export default Revewis;