import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Image} from '@nextui-org/react';
import elrinconPic from "../assets/elrincondesergio.png"
import camalaPic from "../assets/camala.png"
import realPic from "../assets/churreria.png"

export default function Swipper() {
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
          <Image  isBlurred  src={elrinconPic} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src={camalaPic} />
        </SwiperSlide>
        <SwiperSlide>
          <Image isBlurred src={realPic} />
        </SwiperSlide>
        
      </Swiper>
  )
}
