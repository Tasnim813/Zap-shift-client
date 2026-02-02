import React, { use } from 'react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevewCart from './RevewCart';

const Revewis = ({reveiwsPromise}) => {
    const reveiws=use(reveiwsPromise)
    console.log(reveiws)
    return (
      <div>
        <div>
        <h1>Revewis section</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, maxime.</p>
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