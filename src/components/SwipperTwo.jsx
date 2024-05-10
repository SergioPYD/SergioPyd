import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Image} from '@nextui-org/react';
import picOne from "../assets/1.png"
import picTwo from "../assets/2.png"
import picThree from "../assets/3.png"

export default function SwipperTwo() {
  return (
    <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoHeight={true}

        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image isBlurred src={picOne} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  isBlurred  src={picTwo} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src={picThree} />
        </SwiperSlide>
        
      </Swiper>
  )
}
