import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReveiwsCart from './ReveiwsCart';



const Reveiws = ({reviwsPromise}) => {
    const reveiws=use(reviwsPromise)
    console.log(reveiws)
    return (
        <div className='mb-10'>
            <div className='mb-10'>
            
                <h1 className='text-secondary font-bold text-3xl text-center'>What our customers are sayings</h1>
            <p className='text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: "10%",
          depth: 100,
          modifier: 1,
        
          slideShadows: true,
        }}
         autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >

        {
            reveiws.map(reveiw=> <SwiperSlide key={reveiw.id}>
          <ReveiwsCart reveiw={reveiw}></ReveiwsCart>
        </SwiperSlide>)
        }
       
       
      </Swiper>
        </div>
        
    );
};

export default Reveiws;