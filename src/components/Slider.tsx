// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Slider() {
  return (
    <div className='w-full md:w-3/4 mx-auto'>
      <Swiper
        id='swiper-color'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={4}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <Image src='/images/mtv.svg' alt='fox' width='100' height='150' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/yahoo.svg' alt='fox' width='100' height='400' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/fox.svg' alt='fox' width='100' height='150' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/mtv.svg' alt='fox' width='100' height='150' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/yahoo.svg' alt='fox' width='100' height='150' />
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/images/fox.svg' alt='fox' width='100' height='150' />
        </SwiperSlide>
      </Swiper>
      <div className='flex justify-center'>
        <button className='btn bg-[#2D1912] text-white border-2 m-4'>
          View All
        </button>
      </div>
    </div>
  );
}
