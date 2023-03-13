// import Swiper core and required modules
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Image from "next/image";
import useDeviceSize from "@/hooks/useDeviceHook";
import { useEffect, useState } from "react";

export default function Statistics() {
  const [width, height] = useDeviceSize();
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [space, setSpace] = useState(3);

  return (
    <div className='w-4/5 text-orangeLight p-2 my-24'>
      <h3>Updates</h3>
      <h1 className='text-2xl md:text-2xl font-bold'>OGz News</h1>

      <Swiper
        id='swiper-color'
        slidesPerView={2}
        spaceBetween={width < 1024 ? 200 : 100}
        navigation={width < 768 ? false : true}
        modules={[Pagination, Navigation]}
        className='mySwiper my-8'
      >
        <SwiperSlide>
          <div
            className='w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl bg- card'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update1.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz helps schools in Chad
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg- card w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update2.svg'
                alt='update2'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg- card w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg- card w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='bg- card w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='card w-48 md:w-[394px] h-80 
           md:h-[187px] flex flex-col md:flex-row gap-4 shadow-2xl  card'
          >
            {/* image container */}
            <div className='image-container relative w-full h-1/2 md:h-full'>
              <Image
                src='/images/update3.svg'
                alt='update1'
                fill
                className='object-cover'
              ></Image>
            </div>
            {/* info container */}
            <div className='flex flex-col justify-start md:justify-center items-start md:items-start gap-2 text-slate-200'>
              <h3>2023-12-4</h3>
              <h1 className='font-bold text-slate-100'>
                Ogz ads dextool for an entire year
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec risus odio bibendum
                mattis amet eget.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
